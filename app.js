
(
    function(){
        angular.module("MyApp",[]).controller("MyController", function($scope){
            $scope.message="";
            $scope.result="";
            $scope.checkExcessiveFood=function (){
                $scope.items=$scope.message.split(',');
                $scope.number=$scope.items.length;
                if ($scope.message==""){
                    $scope.result="Please enter data first";
                }
                else if($scope.number>0 && $scope.number<=3){
                    $scope.result="Enjoy!";
                }else if($scope.number>3){
                    $scope.result="Too Much!";
                }


               
            }
        });
    }
)();
