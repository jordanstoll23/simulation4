angular.module('triviaTrends').service('triviaSrvc', function($http) {
  this.getQuestions = function(){
    return $http.get(
       'https://practiceapi.devmountain.com/api/trivia/questions'
    )
}
});