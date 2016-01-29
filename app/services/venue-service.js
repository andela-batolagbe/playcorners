var app = angular.module('playcorners');

app.factory('eventService', ['$http', 'envConfig', 

  function($http, envConfig) {

    var Event = {

      addVenue: function(data) {
        return $http.post(envConfig.apiEndPoint + 'venues/', data)
      },   

      getVenue: function(venueId) {
        return $http.get(envConfig.apiEndPoint + 'venues/' + venueId)
      }, 

      updateVenue: function(venueId, data) {
        return $http.put(envConfig.apiEndPoint + 'venues/' + venueId, data)
      },
      
     deleteAccount: function(venueId) {
      return $http.delete(envConfig.apiEndPoint + 'venues/' + venueId)
      }  
  }
  return User;
  
}])
