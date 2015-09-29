class PerfectScrollbarDirective {
  constructor ($timeout) {
    'ngInject';
    this.restrict= 'A';
    this._$timeout = $timeout;
  }

  link(scope, element) {
      PerfectScrollbarDirective.instance._$timeout(function(){
          element.perfectScrollbar();
      });
  }

  static createInstance($timeout) {
    'ngInject';
     PerfectScrollbarDirective.instance = new PerfectScrollbarDirective($timeout);
     return PerfectScrollbarDirective.instance;
  }
}
// PerfectScrollbarDirective.createInstance.$inject = ['$timeout'];
export default PerfectScrollbarDirective;
