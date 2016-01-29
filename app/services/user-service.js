var app = angular.module('playcorners');

app.factory('userService', ['$http', 'envConfig', 'Upload',

  function($http, envConfig, Upload) {

    var User = {

      register: function(image, data) {

       return Upload.upload({
        url: envConfig.apiEndPoint + 'users/',
        data: {
          photo: image,
          name: data.name,
          email: data.email,
          password: data.password
        },
        method: 'POST'
      });
        
      },

      login: function(data) {
        return  $http.post(envConfig.apiEndPoint + 'users/login/', data)
      },
    
      logout: function() {
        return  $http.post(envConfig.apiEndPoint + 'users/logout')
      },   

      getUser: function(userId) {
        return $http.get(envConfig.apiEndPoint + 'users/' + userId)
      }, 

      updateProfile: function(userId, data) {
        return $http.put(envConfig.apiEndPoint + 'users/' + userId, data)
      },
      
     deleteAccount: function(userId) {
      return $http.delete(envConfig.apiEndPoint + 'users/' + userId)
      }  
  }
  return User;

}])
