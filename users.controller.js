angular.module('app').controller('UsersCtrl', function ($scope,$interval,UtentiService) {

    $scope.titolo = "lista utenti";

    $interval(function(){
       $scope.data = new Date();
      },1000);

    $scope.utenti = UtentiService.getUtenti();
    $scope.lingua = 'Tutte';

});
