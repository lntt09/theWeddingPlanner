class AddFloristsToPlanner < ActiveRecord::Migration[6.0]
  def change
    add_reference :planners, :florists, foreign_key: true
  end
end
