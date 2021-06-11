class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.text :datepick
      t.text :name
      t.text :with
      t.text :menu
      t.text :anything

      t.timestamps
    end
  end
end
