class PostsController < ApplicationController
  def index
    @post = Post.all
    render json: @post
  end

  def create
    @post = Post.create(
      firstName: params[:firstName], lastName: params[:lastName], 
      email: params[:email], phoneNumber: params[:phoneNumber],
      offerType: params[:offerType], roomType: params[:roomType],
      monthlyFee: params[:monthlyFee], deposit: params[:deposit],
      streetAddress: params[:streetAddress], cityAddress: params[:cityAddress],
      postalCode: params[:postalCode], aboutFloor: params[:aboutFloor],
      aboutBed: params[:aboutBed], aboutFurniture: params[:aboutFurniture],
      aboutLaundry: params[:aboutLaundry], aboutWifi: params[:aboutWifi],
      utilityExpenses: params[:utilityExpenses], aboutPets: params[:aboutPets],
      aboutSmoking: params[:aboutSmoking], aboutDrugs: params[:aboutDrugs],
      aboutParking: params[:aboutParking]
      )
    render json: @post
  end
end
