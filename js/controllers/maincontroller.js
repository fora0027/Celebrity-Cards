angular.module('Routing')
.controller('MainCtrl', function($scope, $http, celebrities) {
   /** 
   we are tying this to the interface (initially) by adding 
   ng-controller to the <main> element
   **/
    $scope.allData;
    
//    $http({method:'Get', url:'js/celebrities.JSON'})
    celebrities.getAll()
    .then(function(response){
        console.log("sorta working?");
        //success
        $scope.allData = response.data;
        
    }, function(response){
        //error
        alert("Error fetching Data");
    });
    
    console.log('MainCtrl is initialized');
});