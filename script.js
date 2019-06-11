var app = angular.module("main",[]);
app.controller("controller", function($scope, $http){

    $scope.idUser = 0;
    $scope.search = 'name';
    $scope.sortColumn = 'name';
    $scope.reverseSort = false;
    
    $scope.displayData = function(){
        $http({
        method: 'GET',
        url: 'display.php'
        }).then(function (response){
            $scope.dataSample = response.data;
        },function (error){
            $scope.dataSample = "Error" + error;
        });
        
    }
    
    $scope.displayAllData = function(idUser){
        $http({
        method: 'POST',
        url: 'displayall.php',
        data: {'newName': idUser },
        }).then(function (response){
            $scope.idUser = response.data;
        },function (error){
            $scope.idUser = "Error" + error;
        });        
    }
    

    
    $scope.sortData = function(column){
        $scope.reverseSort = !$scope.reverseSort;
        $scope.sortColumn = column;
    }

    
    /*
    $scope.displayDataSort = function(isName, isNum, isDesc){
        $http({
        method: 'POST',
        url: 'display.php'
        data: {'isName' : isName,
               'isNum' : isNum,
               'isDesc' : isDesc
                },
        }).then(function (response){
            $scope.dataSample = response.data;
        },function (error){
            $scope.dataSample = "Error" + error;
        });
    }
    */
    
} );