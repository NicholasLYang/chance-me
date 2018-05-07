class SchoolsController < ApplicationController
  def upload
    school = School.friendly.find(params[:slug])
    school.image.attach(image_params)
  end

  private
  def image_param
    params.require(:school).permit(:image)
  end
end
