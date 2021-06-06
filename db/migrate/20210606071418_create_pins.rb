class CreatePins < ActiveRecord::Migration[6.1]
  def change
    create_table :pins do |t|
      t.float :pos_x
      t.float :pos_y
      t.string :pin_image

      t.timestamps
    end
  end
end
