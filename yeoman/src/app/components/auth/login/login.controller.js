class LoginCtrl {
  constructor ($scope, $auth, $state) {
    'ngInject';
    this._$auth = $auth;
    this.loginForm = {};

    $scope.$on('auth:login-error', (ev, reason) => {
      this.loginForm.password = '';
      if (reason.errors !== undefined)
        this.errors = reason.errors.join(',');
      else if (reason.indexOf('Error occured while trying to proxy') + 1)
        this.errors = 'Сервер не доступен!';
      Materialize.toast(this.errors, 5000);
    });

    $scope.$on('auth:login-success', function(ev, user) {
      $state.go('main');
    });

    $scope.$on('auth:logout-success', function(ev) {
      $state.go('auth.login');
    });
  }

  handleLoginBtnClick () {
    this._$auth.submitLogin(this.loginForm);
  }

}

export default LoginCtrl;
