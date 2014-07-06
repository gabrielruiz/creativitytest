'use strict';

var api = require('./controllers/api'),
    index = require('./controllers');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/questionsTest')
    .get(api.questionsTest);

  // Server API Valorations
  app.route('/api/valorations')
    .get(api.valorations);
  
  // Server API Routes
  app.route('/api/totalResult')
    .get(api.totalResult);

  // Server API Routes
  app.route('/api/totalByAreas')
    .get(api.totalByAreas);

  // Server API Routes
  app.route('/api/descriptionsByColumns')
    .get(api.descriptionsByColumns);


  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};