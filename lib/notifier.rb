class Notifier < ActionMailer::Base

  def feedback(from, message)
    mail(
      :to => 'lenardandal@gmail.com', #'FortunatelySweet@gmail.com',
      :from => 'fsweet@gmail.com', # doesn't work !
      :reply_to => from, #'FortunatelySweet@gmail.com',
      :subject => "Website Feedback"
    ) do |format|
      format.text { render :text => message }
      # format.html { render :text => "<h1>Hello Lenard!</h1>" }
    end
  end
  
end