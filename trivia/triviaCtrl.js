angular.module("triviaTrends").controller('triviaCtrl', function( $scope, triviaSrvc){
  
$scope.q = {
  "difficulty": 2,
  "question": "which animal is the hyena more closely related to?",
  "animal": "hyena",
  "correct_answer": 3,
  "options": {
      "1": "wolf",
      "2": "african wilddog",
      "3": "lion",
      "4": "zebra"
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

this.addQuestion = function(add) {
  return $http({
      method: 'POST',
      url: 'https://practiceapi.devmountain.com//api/trivia/questions',
      data: [add],
  }).then(function(response) {
      return response.data;
  })
}
})