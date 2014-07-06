'use strict';

/**
 * Get questions about the Test
 */
exports.questionsTest = function(req, res) {
  res.json([
    {
      name : 'Llevo conmigo la creatividad a todos lados (reuniones, charlas, interacciones con otras personas). Mi creatividad es verdaderamente una parte de lo que soy.',
      info : 'A',
      number: 0
    }, {
      name : 'Antes de empezar un proyecto que requiere creatividad, siempre tengo claro cuál es mi desafío creativo.',
      info : 'B',
      number: 1
    }, {
      name : 'Me siento cómodo compartiendo mi opinión y tomando ciertos riesgos en el trabajo o estudio.',
      info : 'C',
      number: 2
    }, {
      name : 'Raramente me quedo sin recursos creativos. Tengo muchos recursos para inspirarme a mi alcance.',
      info : 'D',
      number: 3
    }, {
      name : 'Tengo ideas muy diferentes del resto de mis colegas o compañeros.',
      info : 'E',
      number: 4
    }, {
      name : 'Si trabajo en equipo, en general gana la mejor idea, no la idea de la persona que “sabe más del tema”.',
      info : 'F',
      number: 5
    }, {
      name : 'Siento que tengo mucha creatividad dentro de mí.',
      info : 'A',
      number: 6
    }, {
      name : 'Desafío y cuestiono regularmente el estado de las cosas.',
      info : 'B',
      number: 7
    }, {
      name : 'Hago ejercicios de entrada en calor mental rutinariamente para prepararme mejor frente a mis desafíos creativos.',
      info : 'C',
      number: 8
    }, {
      name : 'Empiezo rápido y con facililidad a trabajar cuando tengo un desafío creativo frente a mí.',
      info : 'D',
      number: 9
    }, {
      name : 'Realizo lluvia de ideas ( brainstorming) de manera frecuente, divertida, enfocada y productiva.',
      info : 'E',
      number: 10
    }, {
      name : 'Tengo un sistema para seleccionar las mejores ideas de las que no son tan buenas.',
      info : 'F',
      number: 11
    }, {
      name : 'Donde trabajo se nos pide ser creativos, tenga la tarea que tenga.',
      info : 'A',
      number: 12
    }, {
      name : 'Me hago preguntas internamente sobre por qué algunas cosas no existen hoy en día.',
      info : 'B',
      number: 13
    }, {
      name : 'Cuando trabajo en ideas nuevas, abandono mi entorno cotidiano y encuentro uno nuevo que me permita crear.',
      info : 'C',
      number: 14
    }, {
      name : 'Me siento lo suficientemente confiado para hacer frente a cualquier desafío creativo, grande o chico.',
      info : 'D',
      number: 15
    }, {
      name : 'Cuando trabajo solo o en equipo para desarrollar ideas nuevas, uso distintas técnicas que aprovechan mi potencial creativo.',
      info : 'E',
      number: 16
    }, {
      name : 'Sé cómo medir la creatividad que tienen mis ideas.',
      info : 'F',
      number: 17
    }, {
      name : 'Donde trabajo o estudio se premia y se valora la creatividad.',
      info : 'A',
      number: 18
    }, {
      name : 'Es raro que acepte las cosas como son, y suelo cuestionar la autoridad.',
      info : 'B',
      number: 19
    }, {
      name : 'Mientras voy creando cosas nuevas, raramente las edito o las cambio en el proceso.',
      info : 'C',
      number: 20
    }, {
      name : 'Conozco muchas técnicas para ser más creativo.',
      info : 'D',
      number: 21
    }, {
      name : 'Tengo mucha imaginación y muchas ideas “locas”.',
      info : 'E',
      number: 22
    }, {
      name : 'Una vez que tengo una buena idea, suelo testearla antes de comentarla con alguien.',
      info : 'F',
      number: 23
    }, {
      name : 'La creatividad, la originalidad y la imaginación son algunas de mis prioridades personales y profesionales.',
      info : 'A',
      number: 24
    }, {
      name : 'Estoy altamente consciente de mi entorno y de lo que me rodea.',
      info : 'B',
      number: 25
    }, {
      name : 'Me siento cómodo al tomar riesgos y contribuir con mis ideas más innovadoras, sin miedo de avergonzarme.',
      info : 'C',
      number: 26
    }, {
      name : 'Suelo usar metáforas y analogías.',
      info : 'D',
      number: 27
    }, {
      name : 'Tengo un buen sistema para generar ideas nuevas para cualquier tipo de desafío que se me presente.',
      info : 'E',
      number: 28
    }, {
      name : 'Cuando creo buenas ideas, suelo saber qué hacer para ponerlas en acción.',
      info : 'F',
      number: 29
    }
  ]);
};

/*Get Total Result of TEST*/
exports.totalResult = function(req, res) {
  res.json([
    {
      text : 'Estás en mejor lugar que la mayoría. Este puntaje te posiciona dentro del diez por ciento de las personas (y organizaciones) más creativas. Estás conectado con tu parte creativa y en una organización que la apoya. Este puntaje también significa que te encontrás bien posicionado para continuar con el crecimiento de tu capacidad creativa y estás en el camino de conseguir tu máximo potencial.',
      between : '130-150',
    }, {
      text : 'Definitivamente, no está mal, pero tenés bastante para mejorar. Este puntaje indica que estás haciendo muchas cosas bien, pero que también tenés barreras significativas que se meten en el camino de tu creatividad.Puede ser que te encuentres en una organización que la esté inhibiendo y haciendo que te quedes atrás.Este puntaje debería alertarte sobre el potencial que tenés pero que no estás usando de manera efectiva.',
      between : '110-129',
    }, {
      text : 'Desafortunadamente, estás en la misma situación que casi el sesenta por ciento de la población.Es probable que tengas habilidades creativas importantes, pero están siendo restringidas en forma significativa la mayor parte del tiempo, y que te sientas frustrado con la burocracia dentro de alguna organización o tengas muchas creencias que limiten tus ganas de expresar tus habilidades creativas. \n\
              Debés decirte a vos mismo cosas como: “No soy creativo” o “No puedo compartir ideas porque la gente se va a reír de mí”.Los músculos de tu creatividad necesitan que les saques el polvo y los pongas a ejercitar.Las buenas noticias son que vas a ver un crecimiento importante cuando empieces a trabajar en ello.',
      between : '85-109',
    }, {
      text : 'Estás en la zona peligrosa de la creatividad. Este puntaje debería servirte como un llamado para que te despiertes; debería ser una señal de que algo debe ser cambiado o vas a tener problemas significativos en el futuro. Sos un alma creativa perdida y necesitás reconectarte de inmediato con tu imaginación. Quizá tu trabajo o tus rutinas te estén frenando. Si bien esta información te puede resultar alarmante, no te sientas desalentado.',
      between : '84 o menos',
    }
  ]);
};

/*Get Result by Specific Areas of Creativities*/
exports.totalByAreas = function(req, res) {
  res.json([
    {
      text : 'Excelente',
      between : '22-25',
    }, {
      text : 'Por sobre el promedio',
      between : '19-21',
    }, {
      text : 'Promedio',
      between : '17-18',
    }, {
      text : 'Por debajo del promedio',
      between : '16 o menos',
    }
  ]);
};

/*Get Descriptions by Columns*/
exports.descriptionsByColumns = function(req, res) {
  res.json([
    {
      description : 'Corresponde a características generales sobre tus intenciones hacia la creatividad.',
      column : 'A',
      result: ''
    }, {
      description : 'Indica cómo estás en términos de curiosidad y atención.',
      column : 'B',
      result: ''
    }, {
      description : 'Muestra cuán bien preparás tu entorno y tu mente para dejar fluir tus mejores ideas.',
      column : 'C',
      result: ''
    }, {
      description : 'Indica tu habilidad para encontrar ideas creativas e inspiración en muchas áreas distintas de la vida. Mezcla de conceptos.',
      column : 'D',
      result: ''
    }, {
      description : 'Señala cuán apto estás para generar una amplia cantidad de ideas de alta calidad cuando sea necesario.',
      column : 'E',
      result: ''
    }, {
      description : 'Muestra qué tan preparado estás para elegir las mejores ideas y luego poner la creatividad en acción.',
      column : 'F',
      result: ''
    }
  ]);
};

/*Get Descriptions by Columns*/
exports.valorations = function(req, res) {
  res.json([
    {
      number: 1,
      title: 'Para nada...'
    }, {
      number: 2,
      title: 'Un poco..'
    }, {
      number: 3,
      title:'Si, asi es.'
    }, {
      number: 4,
      title:'Muy a menudo.'
    }, {
      number: 5,
      title: 'Todo el tiempo.'
    }
  ]);
};