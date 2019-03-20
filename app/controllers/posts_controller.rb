class PostsController < ApplicationController

  def index
    @posts = Post.includes(user: :likes)
  end

  def show
    @post = Post.find(params[:id])
    @comments = @post.comments.includes(:user)
    @like = Like.new
  end

  def new
    @post = current_user.posts.build
  end

  def create
    @post = current_user.posts.build(post_params)
    if @post.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      render 'edit'
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
  end


  private
    def post_params
      params.require(:post).permit(:title, :text, :image)
    end
end
