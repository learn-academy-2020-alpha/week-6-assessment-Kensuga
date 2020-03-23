# ASSESSMENT 6: Rails Commenting Challenge
# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# app/controller/blog_posts_controller.rb

# 1)This is the controller, it is referanced by our routes to preform the indicated functions listed within the controller
class BlogPostsController < ApplicationController
  def index
    # 2) Assigns @posts with all BlogPost data
    @posts = BlogPost.all
  end

  def show
    # 3) Assigns @post a specifc BlogPost based off the id given
    @post = BlogPost.find(params[:id])
  end

  # 4) Renders new.html.erb
  def new
  end

  def create
    # 5) Creates a new BlogPost with its parameters, validates if the post is valid, and if so, redirects them to the post, otherwise gives an error
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to @post
    else
      render action: :new
    end
  end

  def delete
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # 6) Redirects teh user  to the post if the delete failed
      redirect_to blog_post_path(@post)
    end
  end

  # 7) Any method created below the private indication cannot be called by any other class, and only methods within the class itself can call this.
  private
  def blog_post_params
    # 8) These are parameters we user to pass to our methods
    params.require(:blog_post).permit(:title, :content)
  end

end


# app/models/blog_post.rb

# 9)This is the models file itself.
class BlogPost < ApplicationRecord
  # 10) This creates a relation between a model called comment, indicating that this post can have many comments that belong to it.
  has_many :comments
end
