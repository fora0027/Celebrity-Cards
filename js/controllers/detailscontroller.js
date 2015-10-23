angular.module('Routing')

.controller('DetailsCtrl', function($scope, $routeParams, celebrities) {
   /** 
   we are tying this to the interface (initially) by adding 
   ng-controller to the <main> element
   **/
    //$scope.celebName = "Tom Hanks";
    $scope.celebId = $routeParams.celebId;
    $scope.celebs = {}
    console.log('DetailsCtrl is initialized');
    
    //    $http({method:'Get', url:'js/celebrities.JSON'})
    celebrities.getOne($scope.celebId)
    .then(function(response){
        console.log("sorta working details?");
        //success
        var celebs = response.data.celebrities;
        celebs.forEach(function( i ){
            if(i.id == $routeParams.celebId){
                $scope.celebs = i;
                console.log(i);
            }
        });
        
    }, function(response){
        //error
        alert("Error fetching Data");
    });
});