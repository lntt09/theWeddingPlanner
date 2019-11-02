class AddBandsToPlanner < ActiveRecord::Migration[6.0]
  def change
    add_reference :planners, :bands, foreign_key: true
  end
end
