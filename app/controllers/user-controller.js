var app = angular.module('playcorners')

app.controller('userCtrl', ['userService', '$sessionStorage', '$scope', '$auth', '$state', 
  function(userService, $sessionStorage, $scope, $auth, $state) {

    $scope.logIn = function() {

      var data = {
        username: $scope.username,
        password: $scope.password
      };

      userService.login(data)
      .then(function(response) {
        $sessionStorage.userToken = response.data.user.token;
        $sessionStorage.activeUser = response.data.user;
        $state.go('Home');
      }, 
      function(error){
        $scope.errorMessage = error.data.message;
      });
    } 
  
    $scope.signUp = function() {

      var userAvatar = $scope.avatar;

      var verifyPassword = $scope.verifyPassword;

      var data = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password
      };

      userService.register(userAvatar, data)
      .then(function(response) {
        $scope.successMessage = response.body.message;
        $state.go('Login');
      }, 
      function(error){
        $scope.errorMessage = error.data.message;
      });
    }

    $scope.signOut = function() {
      $sessionStorage.reset();

      userService.logout()
      .then(function(response) {
          $scope.successMessage = response.body.message;

          if ($state.$current.name === 'Home') {
            $state.reload();
          } else {
            $state.go('Home');
          }
        }, function(error) {
          $scope.errorMessage = response.body.message;
        });
    }

    $scope.getUser = function() {

      var userId = $sessionStorage.activeUser.Id;

      userService.getUser(userId)
      .then(function(response) {
        $scope.User = response.body;
      }, 
      function(error){
        $scope.errorMessage = error.message;
      });
    }

    $scope.updateProfile = function() {

      var userId = $sessionStorage.activeUser.id,
      data = {
        username: $scope.username,
        email: $scope.email,
        password: $scope.password,
      }


      userService.updateProfile(userId, data)
      .then(function(response) {
        $scope.successMessage = response.body.message;
      }, 
      function(error){
        $scope.errorMessage = error.message;
      });
    }

    $scope.deleteAccount = function() {

      var userId = $sessionStorage.activeUser.Id;

      userService.getUser(userId)
      .then(function(response) {
        $scope.successMessage = response.body.message;
        $state.go('Home');
      }, 
      function(error){
        $scope.errorMessage = error.message;
      });
    }

    $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
        .then(function(response) {

          $auth.setToken(response.data.token);
          $sessionStorage.activeUser = response.data.user;

          $scope.message = 'Login Successful';
          $state.go('Home');
          
        }, function(error) {

          $scope.errorMessage = error.data.message;
      });
    };

    $scope.isAuthenticated = function() {

      $auth.isAuthenticated();
    };
  }

  ]);