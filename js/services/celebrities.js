angular.module("Routing")
    .factory('celebrities', function celebritiesFactory($http) {

        return {
            getAll: function () {
                return $http({method: 'Get', url: 'js/celebrities.JSON'});
            },
            getOne: function (id) {
                return $http({method: 'Get', url: 'js/celebrities.JSON'});
            }
        }
    });