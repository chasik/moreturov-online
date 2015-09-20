class LoginCtrl {
  constructor ($scope, $auth) {
    'ngInject';
    this._$auth = $auth;
    this.loginForm = {};

    $scope.$on('auth:login-error', (ev, reason) => {
      this.loginForm.password = '';
      this.errors = reason.errors[0];
    });

    $scope.$on('auth:login-success', function(ev, user) {
      $state.go('main.themes');
    });

    $scope.$on('auth:logout-success', function(ev) {
      $state.go('auth.login');
    });
  }

}

export default LoginCtrl;
