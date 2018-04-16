class HelloController < ApplicationController
  def greet
   render json: { message: "Welcome to ChanceMe's API! We do not provide documentation,"\
    " but you are welcome to use the API anyways." }
  end
end
