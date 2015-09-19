function runBlock ($log, $auth, $rootScope, $state) {
  'ngInject';
  $log.debug('runBlock end');

  $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error) {
      if (error.reason === 'unauthorized') {
        event.preventDefault();
        $state.go('auth.login');
      }
  });
}

export default runBlock;
