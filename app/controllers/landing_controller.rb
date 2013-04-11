class LandingController < ApplicationController
  def index
    if signed_in?
      @friend_ids = client.friend_ids.ids
    else
      redirect_to :signin
    end
  end
end
