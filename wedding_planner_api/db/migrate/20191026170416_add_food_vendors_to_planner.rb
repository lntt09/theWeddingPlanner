class AddFoodVendorsToPlanner < ActiveRecord::Migration[6.0]
  def change
    add_reference :planners, :food_vendors, foreign_key: true
  end
end
