angular.module('IMPERIUM').controller('reportesController', ['$scope', '$sessionStorage', '$location', function ($scope, $sessionStorage, $location) {

    $scope.reporteId = {};
    $scope.Grafica = {};

    $scope.reporteIndentificacion = function () {
      $sessionStorage.reporte = $scope.reporteId;
      $location.path("/reporteIdentificacion");
    };



    $scope.reporteGrafica = function () {

//              console.log($scope.Grafica.fechaInicio);

      $sessionStorage.reporte = $scope.Grafica;
      $location.path("/reporteGrafica");
    };

  }]);