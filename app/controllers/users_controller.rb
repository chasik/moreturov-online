class UsersController < ApplicationController
  before_action :authenticate_user!

  def get_menu
    menu = []
    if current_user.is_admin?
      admin_items = []
      admin_items.push name: 'admin-users', title: 'Пользователи', icon: 'mdi-action-supervisor-account', uisref: '#'
      admin_items.push name: 'admin-operators', title: 'Тур. операторы', icon: 'mdi-image-landscape', uisref: '#'

      menu.push name: 'admin-menu', title: 'Администрирование', icon: 'mdi-hardware-security', uisref: '#', items: admin_items
    end
    menu.push name: 'dashboard-panel', title: 'Панель управления', icon: 'mdi-action-dashboard', uisref: '#'
    menu.push name: 'search-panel', title: 'Поиск туров', icon: 'mdi-action-search', uisref: 'main.search'

    render json: { items: menu }
  end
end
