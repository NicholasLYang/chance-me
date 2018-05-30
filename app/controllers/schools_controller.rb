class SchoolsController < ApplicationController
  def upload
    school = School.friendly.find(params[:school][:slug])
    school.image.attach(params[:school][:image])
  end

end
