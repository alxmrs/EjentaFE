(function(){
  angular.module('app.home')
    .controller( 'HomeCtrl', ['RESTService', HomeController]);

  var ctrl, rest;

  function HomeController(RESTService){
    ctrl = this;
    rest = RESTService;

    ctrl.getChallengeData();
  }

  HomeController.prototype.getChallengeData = function(){
    rest.get('/challenge')
      .then(function(response){
        console.log(response.data);
      }, function(err){
        console.log(err);
      });
  };

})();