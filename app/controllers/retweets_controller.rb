class RetweetsController < ApplicationController
  def on
    client.friendship_update(params[:id].to_i, :retweets => true)
    head :ok
  end

  def off
    client.friendship_update(params[:id].to_i, :retweets => false)
    head :ok
  end
end
