class Notifier < ActionMailer::Base

  def feedback(from, message)
    mail(
      :to => 'FortunatelySweet@gmail.com',
      :from => from, #'fsweet@gmail.com'
      :reply_to => from, #'FortunatelySweet@gmail.com',
      :subject => "Website Feedback"
    ) do |format|
      format.text { render :text => message }
      # format.html { render :text => "<h1>Hello Lenard!</h1>" }
    end
  end
  
end