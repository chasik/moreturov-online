function routerConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
  'ngInject';
  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main',
      resolve: {
        auth: function($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state('auth', {
      url: '/auth/',
      templateUrl: 'app/components/auth/auth.html',
      controller: 'AuthCtrl',
      controllerAs: 'auth'
    })
    .state('auth.login', {
      url: 'login/',
      templateUrl: 'app/components/auth/login/login.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .state('auth.registration', {
      url: 'registration/',
      templateUrl: 'app/components/auth/registration/registration.html',
      controller: 'RegistrationCtrl',
      controllerAs: 'registration'
    })
    .state('auth.forgotpass', {
      url: 'forgotpass/',
      templateUrl: 'app/components/auth/forgotpass/forgotpass.html',
      controller: 'ForgotpassCtrl',
      controllerAs: 'forgotpass'
    });

  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

export default routerConfig;
