class CreateFlorists < ActiveRecord::Migration[6.0]
  def change
    create_table :florists do |t|
      t.string :floristName
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phoneNumber

      t.timestamps
    end
  end
end
