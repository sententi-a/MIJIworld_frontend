class AddRestinfoToPins < ActiveRecord::Migration[6.1]
  def change
    add_reference :pins, :restinfo, null: false, foreign_key: true
  end
end
