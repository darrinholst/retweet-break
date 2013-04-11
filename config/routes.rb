Retweetbreak::Application.routes.draw do
  root :to => 'landing#index'
  get '/auth/twitter/callback', to: 'sessions#create', as: 'callback'
  get '/signin', to: 'sessions#new', as: 'signin'
  post '/retweets/:id', to: 'retweets#on'
  delete '/retweets/:id', to: 'retweets#off'
end
