class CreateFoodVendors < ActiveRecord::Migration[6.0]
  def change
    create_table :food_vendors do |t|
      t.string :fvName
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phoneNumber

      t.timestamps
    end
  end
end
