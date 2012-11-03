require 'sinatra'
require "sinatra/reloader" if development?
require "haml"
require 'json'
require 'sinatra/backbone'

class MyApp < Sinatra::Base
  configure do
    enable :sessions
    set :root, File.dirname(__FILE__)
    set :views, settings.root + '/app/views'
    register Sinatra::Reloader
    register Sinatra::JstPages
    serve_jst '/jst.js'
  end
  get '/' do
    erb :index
  end

  get '/data/users.json' do
    obj = {
          "success" => true,
          "users"   => [
              {"id"=> 1, "name"=>'Yo yo yo',    "email"=> "ed@sencha.com"},
              {"id"=> 2, "name"=>'Tommy', "email"=> "tommy@sencha.com"}
          ]
      }
      obj.to_json
  end
  post '/data/users.json' do
    raise params.inspect
    obj = {
          "success" => true,
          "users"   => [
              {"id"=> 1, "name"=>'Yo yo yo',    "email"=> "ed@sencha.com"},
              {"id"=> 2, "name"=>'Tommy', "email"=> "tommy@sencha.com"}
          ]
      }
      obj.to_json
  end
end
