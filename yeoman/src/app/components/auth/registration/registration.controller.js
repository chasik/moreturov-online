class RegistrationCtrl {
  constructor ($auth, $state) {
    'ngInject';
    this._$auth = $auth;
    this._$state = $state;
    this.registrationForm = {};
  }

  handleRegBtnClick() {
    this._$auth.submitRegistration(this.registrationForm)
      .then( (resp) => {
        this._$state.go('auth.login');
        // this._$auth.submitLogin({
        //   email: this.registrationForm.email,
        //   password: this.registrationForm.password
        // });
      })
      .catch(function(resp) {

      });
  }
}

export default RegistrationCtrl;
