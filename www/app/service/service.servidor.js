angular.module('IMPERIUM').service('servidorService', ['$http', function ($http) {
           this.cargarTablaIdentificacion = $http.get('http://localhost/cras/www/server.php/cargarTablaIdentificacion');
           
           this.obtenergra=$http.get('http://localhost/cras/www/server.php/obtenerGrafica');

    }]);