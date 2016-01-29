'user-strict';

var app = angular.module('playcorners', ['ui.router', 'ngMessages', 'satellizer', 'ngStorage', 'ngFileUpload', 'ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$authProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider, $authProvider) {

    $stateProvider
      .state('Home', {
        url: "/",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@Home': {
            templateUrl: 'app/views/home.html',
            // controller: 'MainCtrl'
          },
          'footer@Home': {
            templateUrl: 'app/views/footer.html',
          }
        }
      })
      .state('Register', {
        url: "/register",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@Register': {
            templateUrl: 'app/views/register.html',
            controller: 'userCtrl'
          },
          'footer@Register': {
            templateUrl: 'app/views/footer.html',
          }
        }
      })
      .state('Login', {
        url: "/login",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@Login': {
            templateUrl: 'app/views/login.html',
            controller: 'userCtrl'
          },
          'footer@Login': {
            templateUrl: 'app/views/footer.html',
          }
        }
      })
      .state('AddEvent', {
        url: "/events/add",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@AddEvent': {
            templateUrl: 'app/views/add-event.html',
            controller: 'EventCtrl'
          },
          'footer@AddEvent': {
            templateUrl: 'app/views/footer.html',
          }        
        }
      })
      .state('SearchResult', {
        url: "/events/search",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@SearchResult': {
            templateUrl: 'app/views/search-results.html',
            controller: 'EventCtrl'
          },
          'footer@SearchResult': {
            templateUrl: 'app/views/footer.html',
          }
        }
      })
      .state('EventDetails', {
        url: "/events/details",
        views: {
          '': {
            templateUrl: 'app/views/nav.html',
            // controller: 'MainCtrl'
          },
          'views@EventDetails': {
            templateUrl: 'app/views/event-details.html',
            controller: 'EventCtrl'
          },
          'footer@EventDetails': {
            templateUrl: 'app/views/footer.html',
          }
        }
      });
      
    $urlRouterProvider.otherwise("/404");
    $locationProvider.html5Mode(true);

    $authProvider.authHeader = 'x-access-token';
  
    // ngToastProvider.configure({
    //   animation: 'slide'
    // });


  //   $authProvider.facebook({
  //     clientId: '1863446777214443'
  //   });

  //   $authProvider.twitter({
  //     url: '/api/auth/twitter'
  //   });
  }

]);

app.constant('envConfig', {
  'baseUrl': 'http://localhost:9000',
  'apiEndPoint': 'http://localhost:8080/api/v1/'
});