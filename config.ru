$:.unshift Dir.pwd

require 'rubygems'
require 'bundler'
Bundler.setup

require 'haml'
require 'sass'
require 'sinatra'

require 'lib/partials'

require 'action_mailer'
require 'lib/actionmailer_gmail'
require 'lib/smtp_tls'
require 'lib/notifier'

# require 'config/database'

require 'app'
run App
