class CreateBands < ActiveRecord::Migration[6.0]
  def change
    create_table :bands do |t|
      t.string :bandName
      t.string :phoneNumber

      t.timestamps
    end
  end
end
