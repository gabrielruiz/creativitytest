'use strict';

angular.module('creativityTestAppApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.answers = [];
    $scope.questionPercent = 0;
    $scope.resultMessage = '';
    $scope.importantMessage = '';
    $scope.resultByAreas = {};
    
    $http.get('/api/questionsTest').success(function(questionsTest) {
      $scope.questionsTest = questionsTest;
    });

    $http.get('/api/valorations').success(function(valorations) {
      $scope.valorations = valorations;
    });
    
    $scope.testData = function() {
      var positions = [0,0,0,0,0,0],
          total = 0;

      for (var i = 0, j = 0; i < $scope.answers.length; i++, j++) {
        positions[j] += $scope.answers[i];
        total += $scope.answers[i];
        if (j > 0 && j % 5 === 0) j = -1;
      }

      //Gets the global result.
      $http.get('/api/totalResult').success(function(totalResult) {
        var $totalResult = totalResult;
        if (130 <= total && total <= 150) {
          $scope.resultMessage = $totalResult[0].text;
        } else if (110 <= total && total <= 129) {
          $scope.resultMessage = $totalResult[1].text;
        } else if (85 <= total && total <= 109) {
          $scope.resultMessage = $totalResult[2].text;
        } else {
          $scope.resultMessage = $totalResult[3].text;
        }
      });

      //Gets the result by specific areas, debilities and strongs.
      $http.get('/api/totalByAreas').success(function(totalByAreas) {
        var resultByArea;

        $http.get('/api/descriptionsByColumns').success(function(descriptionsByColumns) {
          $scope.resultByAreas = descriptionsByColumns;
          for (var i=0; i < positions.length; i++) {
            if (22 <= positions[i] && positions[i] <= 25) {
              resultByArea = totalByAreas[0].text;
            } else if (19 <= positions[i] && positions[i] <= 21) {
              resultByArea = totalByAreas[1].text;
            } else if (17 <= positions[i] && positions[i] <= 18) {
              resultByArea = totalByAreas[2].text;
            } else {
              resultByArea = totalByAreas[3].text;
            }
            $scope.resultByAreas[i].result = resultByArea;
          }
        });
      });

      //Important message.
      $scope.importantMessage = 'Recordá: estos puntajes te dan un pequeño vistazo de dónde estás hoy y en qué áreas necesitás enfocarte más para crecer.';
    };
    
    $scope.radioClick = function (option, value) {
      debugger;
      $scope.answers.push(value);
      angular.element('#li-'+ option).hide('slowly');
      $scope.questionPercent = ((option + 1) * 100) / 30;
      if (option === 29) {
        $scope.testData();
      } else {
        angular.element('#li-'+ (option + 1)).show('slowly');
      }
    }
  })
  
  // Workaround for bug #1404
  // https://github.com/angular/angular.js/issues/1404
  // Source: http://plnkr.co/edit/hSMzWC?p=preview
  .config(['$provide', function($provide) {
    $provide.decorator('ngModelDirective', ['$delegate', function($delegate) {
        var ngModel = $delegate[0], controller = ngModel.controller;
        ngModel.controller = ['$scope', '$element', '$attrs', '$injector', function(scope, element, attrs, $injector) {
            var $interpolate = $injector.get('$interpolate');
            attrs.$set('name', $interpolate(attrs.name || '')(scope));
            $injector.invoke(controller, this, {
                '$scope': scope,
                '$element': element,
                '$attrs': attrs
            });
        }];
        return $delegate;
    }]);
    $provide.decorator('formDirective', ['$delegate', function($delegate) {
        var form = $delegate[0], controller = form.controller;
        form.controller = ['$scope', '$element', '$attrs', '$injector', function(scope, element, attrs, $injector) {
            var $interpolate = $injector.get('$interpolate');
            attrs.$set('name', $interpolate(attrs.name || attrs.ngForm || '')(scope));
            $injector.invoke(controller, this, {
                '$scope': scope,
                '$element': element,
                '$attrs': attrs
            });
        }];
        return $delegate;
    }]);
  }]);    
