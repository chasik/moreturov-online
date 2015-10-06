class LeftMenuDirective {
  constructor (http, state) {
    this.restrict = 'E';
    this._http = http;
    this._state = state;
    this.scope = { }
  }

  link(scope, element, attrs, ctrl) {
    LeftMenuDirective.instance._http.get('/api/users/getmenu/')
    .then( (resp) => {
      console.log(resp);
      var li_menus = LeftMenuDirective.instance.GetMenuItems(resp.data.items);

      element.append('<ul perfect-scrollbar id="slide-out" class="metismenu side-nav fixed leftside-navigation">'
          + li_menus
        + '</ul>'
      );
      element.find('ul').metisMenu({
        toggle: false
      });
    }, (resp) => {
      console.log(resp);
    });

    // динамический ui-sref - не нашел решения и использовал один из методов описанных в инете
    element.on('click', function(e) {
      $('.metismenu a[ui-sref]').each(function(index, element) {
        if (element == e.target) {
          $('.metismenu li').removeClass('active');
          if (angular.element(element).children('ul').length == 0)
            angular.element(element).parent('li').addClass('active');
          LeftMenuDirective.instance._state.go(angular.element(element).attr('ui-sref'));
        }
      });
    });
  }

  GetMenuItems(items) {
    var li_menus = '';
    angular.forEach(items, (value) => {
      li_menus += '<li id="' + value.name + '">'
        + '<a ui-sref="' + value.uisref + '" aria-expanded="false" class="waves-effect waves-cyan"><i class="' + value.icon + '"></i>' + value.title + '</a>';
      if (value.items !== undefined) {
        li_menus += '<ul aria-expanded="true">';
        li_menus += this.GetMenuItems(value.items);
        li_menus += '</ul>';
      }
      li_menus += '</li>';
    });

    return li_menus;
  }

  static createInstance($http, $state) {
    'ngInject';
    LeftMenuDirective.instance = new LeftMenuDirective($http, $state);
    return LeftMenuDirective.instance;
  }
}

export default LeftMenuDirective;
