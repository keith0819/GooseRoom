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
      monthlyFee: params[:monthlyFee], deposit: params[:deposit]
      )
    render json: @post
  end
end
