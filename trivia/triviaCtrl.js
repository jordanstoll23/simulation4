angular.module("triviaTrends").controller('triviaCtrl', function( $scope, triviaSrvc){
  
  triviaSrvc.getQuestions().then(function( response){
    $scope.questionData = response.data;
    console.log(response)
});
})