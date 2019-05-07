var app = angular.module('myApp', []);
app.controller('carsCtrl', function($scope, $http) {
  // On récupère les données du fichier json avec la méthode http.get
  $http.get("assets/js/voiture.json")
  .then(function(response) {
    // reponse.data renvoie le contenu de voiture.json dans la variable myCtrl
    $scope.myCars = response.data;
  });
});
