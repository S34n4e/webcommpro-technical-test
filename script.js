var app = angular.module("main",[]);
app.controller("controller", function($scope, $http){

    /*
    sortColumn: used to know if the table is sorted by 'name' or 'hours_played'
    reverseSort: used to know if the table is sorted by ascendant order or descendant order
    */
    $scope.sortColumn = 'name';
    $scope.reverseSort = false;
    
    /*
    http request to the database through PHP
    JSON of the query's output is stored in dataSample
    */
    $scope.displayData = function(){
        $http({
        method: 'GET',
        url: 'dbget.php'
        }).then(function (response){
            $scope.dataSample = response.data;
        },function (error){
            $scope.dataSample = "Error" + error;
        });
        
    }
    
    /*
    http request to the database through PHP
    JSON of the query's output is stored in idUser
    */
    $scope.displayUserData = function(idUser){
        $http({
        method: 'POST',
        url: 'dbpost.php',
        data: {'idUser': idUser },
        }).then(function (response){
            $scope.idUser = response.data;
        },function (error){
            $scope.idUser = "Error" + error;
        });        
    }
    
    /*
    sorts the data as ASC or DESC
    sorts the data by 'name' or 'hours_played'
    */
    $scope.sortData = function(column){
        $scope.reverseSort = !$scope.reverseSort;
        $scope.sortColumn = column;
    }
    
} );