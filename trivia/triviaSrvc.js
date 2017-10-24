angular.module('triviaTrends').service('triviaSrvc', function($http) {
  this.getQuestions = function(){
    return $http.get(
       'https://practiceapi.devmountain.com/api/trivia/questions'
    )
},
// this.nextPage = function(page) {
//   return $http({
//     method: 'GET',
//     url: `https://practiceapi.devmountain.com/api/trivia/questions?page=${page}`
//   }).then(function(response) {
//     return response.data;
//   })
// }
this.getDifficulty = function(difficulty){
  return $http.get(
    `https://practiceapi.devmountain.com/api/trivia/questions/difficulty/${difficulty}`
 )
}
});