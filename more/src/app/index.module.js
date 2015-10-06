/* global malarkey:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';
import ngTokenAuthConfig from './ng-token-auth.config';

import runBlock from './index.run';
import MainCtrl from './main/main.controller';
import AuthCtrl from './components/auth/auth.controller';
import LoginCtrl from './components/auth/login/login.controller';
import RegistrationCtrl from './components/auth/registration/registration.controller';
import ForgotpassCtrl from './components/auth/forgotpass/forgotpass.controller';

// ui-directives
import LeftMenuDirective from './components/ui-directives/left-menu.directive';

import GithubContributorService from '../app/components/githubContributor/githubContributor.service';
import WebDevTecService from '../app/components/webDevTec/webDevTec.service';
import NavbarDirective from '../app/components/navbar/navbar.directive';
import MalarkeyDirective from '../app/components/malarkey/malarkey.directive';
import PerfectScrollbarDirective from './components/perfect-scrollbar/perfect-scrollbar.directive';

angular.module('more', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ngMaterial', 'ng-token-auth'])
.constant('malarkey', malarkey)
.constant('moment', moment)

.config(config)
.config(routerConfig)
.config(ngTokenAuthConfig)

.run(runBlock)

.service('githubContributor', GithubContributorService)
.service('webDevTec', WebDevTecService)

.controller('MainCtrl', MainCtrl)
.controller('AuthCtrl', AuthCtrl)
.controller('LoginCtrl', LoginCtrl)
.controller('RegistrationCtrl', RegistrationCtrl)
.controller('ForgotpassCtrl', ForgotpassCtrl)

.directive('perfectScrollbar', PerfectScrollbarDirective.createInstance)
.directive('acmeNavbar', () => new NavbarDirective())
.directive('acmeMalarkey', () => new MalarkeyDirective(malarkey))

.directive('leftMenu', LeftMenuDirective.createInstance);
