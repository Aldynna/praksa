var express = require('express');
var router = express.Router();
var pokemons=require('../pokemon.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('test', { title: 'test' });
});
router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.send({
    status:"ok"
  })
});
router.get('/koord', function(req, res, next) {
  //res.send({lat:43.8543, lng:18.3946});
  var granice = {
    sjever: 43.859461,
    jug: 43.848948,
    istok: 18.366025,
    zapad: 18.421501
  };
  var lt;
  var lon;
      var poke=Math.round( Math.random() * 9 + 1);//(Math.random()*9)>>>0;
  /*res.send({
  lt:southW.lat() + latS * Math.random(),
    lon:southW.lng() + lngS * Math.random()
  })*/


  var lngRaspon = granice.zapad - granice.istok;
  var latRaspon = granice.sjever - granice.jug;
      res.send({
        pokemon:pokemons[poke],
        lt:granice.jug + latRaspon * Math.random(),
          lon:granice.istok + lngRaspon * Math.random()
    })


     /* var KK = {lat: granice.jug + latRaspon * Math.random(),
   lng: granice.istok + lngRaspon * Math.random()};
  console.log(KK);
  res.send(KK);*/

}
);

router.get('/vrsta', function(req, res, next) {
  //res.send({lat:43.8543, lng:18.3946});
  var poke=(Math.random()*4)>>>0
  res.send({
    //pokemon:pokemons[poke],

  });

});



module.exports = router;
