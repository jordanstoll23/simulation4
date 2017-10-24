angular.module("triviaTrends").controller('triviaCtrl', function( $scope, triviaSrvc, $http){
  
$scope.q = {
  "difficulty": 0,
  "question": "",
  "animal": "",
  "correct_answer": 0,
  "options": {
      "1": "",
      "2": "",
      "3": "",
      "4": ""
  }
}

  triviaSrvc.getQuestions().then(function( response){
    $scope.questionData = response.data;
    console.log(response)
});
$scope.difficulty = function(difficulty){
  console.log( difficulty);
  triviaSrvc.getDifficulty(difficulty).then(function(response){
    console.log(response);
    $scope.difficultData = response.data;
  })
};

$scope.addQuestion = function(add) {
  console.log(add)
  return $http({
      method: 'POST',
      url: 'https://practiceapi.devmountain.com//api/trivia/questions',
      data: [add],
  }).then(function(response) {
      return response.data;
  })
};

$scope.toggle = function() {
  $scope.Open = !$scope.Open;
}
})
