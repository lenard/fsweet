$:.unshift Dir.pwd

require 'rubygems'
require 'bundler'
Bundler.setup

require 'haml'
require 'sass'
require 'sinatra'
require 'lib/partials'

# require 'config/database'

require 'app'
run App
