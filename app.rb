class App < Sinatra::Base
  helpers Sinatra::Partials
  
  configure do
    set :root, File.dirname(__FILE__)
    
    # Configure public directory
    set :public, Proc.new { File.join(root, "public") }
    
    # Configure HAML and SASS
    set :haml, { :format => :html5 }
    set :sass, { :style => :compressed } if ENV['RACK_ENV'] == 'production'
    
    # session storage ? using cookies most likely
    set :session, true
  end
  
  
  helpers do
    def link_to text, url=nil
      haml "%a{:href => '#{ url || text }'} #{ text }"
    end
    
    def link_to_unless_current text, url=nil
      if url == request.path_info
        text
      else
        link_to text, url
      end
    end
    
    def img(name)
      "<img src='images/#{name}' alt='#{name}' />"
    end
    
    def photo(name)
      "<div class='big outer_border'><img src='photos/#{name}' alt='#{name}' class='inner_border' /></div>"
    end
    
    def small_photo(name)
      "<div class='small outer_border'><img src='photos/#{name}' alt='#{name}' class='inner_border' /></div>"
    end
    
  end
  
  # SASS stylesheet
  get "/css/global.css" do
    headers 'Content-Type' => 'text/css; charset=utf-8'
    sass :"css/global"
  end
  
  # root level favicon.png
  get '/favicon.png' do
    send_file 'favicon.png', :disposition => 'inline'
  end  
  
  get '/' do
    haml :index, :layout => :'layouts/default'
  end

  get '/about' do
    @title = "Fortunately Sweet : About Us"
    haml :about, :layout => :'layouts/default'
  end

  get '/gallery' do
    @title = "Fortunately Sweet : Cupcake Gallery"
    haml :gallery, :layout => :'layouts/default'
  end

  get '/contact' do
    @title = "Fortunately Sweet : Contact Us"
    haml :contact, :layout => :'layouts/default'
  end

  # get '/form' do
  #   %{ <form action="/name" method="post">
  #         <input name="person" type="text">
  #         <input type="submit">
  #      </form> }
  # end
  # 
  # post '/name' do
  #   haml "Hello #{ params[:person] }", :layout => :'layouts/default'
  # end
  # 
  # get "/user/:id" do
  #   "You're looking for user with id #{ params[:id] }"
  # end
end

