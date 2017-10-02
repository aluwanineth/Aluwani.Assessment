app.controller('APIController', function ($scope, APIService) {
    $scope.ObjectType = [
        {
            "value": 1,
            "text": "XML"
        },
        {
            "value": 2,
            "text": "JSON"
        }
    ];

    $scope.getAddress = function () {
        var promiseGetAddress = APIService.getAddress($scope.address, $scope.selected_text);
        promiseGetAddress.then(function (_results) {
            console.log(_results.data);
            if ($scope.selected_text === "XML") {
                $scope.queryResults = _results.data;
                $scope.address_components = $scope.queryResults[0].address_components;
            }
            else
            {
                $scope.queryResults = _results.data.results;
                $scope.address_components = $scope.queryResults[0].address_components;
            }         
        },
            function error(_error) {
                $scope.queryError = _error;
            });
    }    
});