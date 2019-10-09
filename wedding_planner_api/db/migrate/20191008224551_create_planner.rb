class CreatePlanner < ActiveRecord::Migration[6.0]
  def change
    create_table :planners do |t|
      t.string :first_name
      t.string :last_name
      t.string :wedding_date

    end
  end
end
