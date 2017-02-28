angular.module('app').controller('UsersCtrl', function ($scope, Users) {

    $scope.listaUtenti = Users.list();

    $scope.lingua = "Tutte";

    $scope.sesso = "";

    $scope.titolo = "lista utenti";

    $scope.data = new Date();


});