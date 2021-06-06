Rails.application.routes.draw do
  resources :restinfos
  get 'start/mainpage'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'start#mainpage'

  get "/map", to: "map#worldmap"
end
