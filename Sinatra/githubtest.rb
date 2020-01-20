#https://developer.github.com/webhooks/configuring/
#gem install sinatra
require 'sinatra'
require 'json'

post '/payload' do
  push = JSON.parse(request.body.read)
  puts "I got some JSON: #{push.inspect}"
end