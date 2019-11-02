class AddVenuesToPlanner < ActiveRecord::Migration[6.0]
  def change
    add_reference :planners, :venues, foreign_key: true
  end
end
