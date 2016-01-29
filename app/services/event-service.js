var app = angular.module('playcorners');

app.factory('eventService', ['$http', 'envConfig', 

  function($http, envConfig) {

    var Event = {

      addEvent: function(data) {
        return $http.post(envConfig.apiEndPoint + 'events/', data)
      },  

      getAllEvents: function() {
        return $http.get(envConfig.apiEndPoint + 'events/')
      }, 

      getOneEvent: function(eventId) {
      return $http.get(envConfig.apiEndPoint + 'events/' + eventId)
      }, 

      updateEvent: function(eventId, data) {
      return $http.put(envConfig.apiEndPoint + 'events/' + eventId, data)
      },
      
     deleteAccount: function(eventId) {
      return $http.delete(envConfig.apiEndPoint + 'events/' + eventId)
      }  
  }
  return User;
  
}])
