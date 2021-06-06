class CreateRestinfos < ActiveRecord::Migration[6.1]
  def change
    create_table :restinfos do |t|
      t.string :restname
      t.string :continent
      t.string :restkind
      t.string :header
      t.string :font
      t.string :flag
      t.string :address
      t.string :openwhen
      t.text :restexp1
      t.text :restexp2
      t.text :mapurl
      t.string :eatsay1
      t.string :eatsay2
      t.string :namemenu1
      t.string :namemenu2
      t.string :namemenu3
      t.text :menu1exp1
      t.text :menu1exp2
      t.integer :menu1price
      t.text :menu2exp1
      t.text :menu2exp2
      t.integer :menu2price
      t.text :menu3exp1
      t.text :menu3exp2
      t.integer :menu3price
      t.float :ratingkakao
      t.float :ratingnaver
      t.float :ratinggoogle
      t.integer :raterskakao
      t.integer :ratersnaver
      t.integer :ratersgoogle
      t.text :kakaourl
      t.text :naverurl
      t.text :googleurl

      t.timestamps
    end
  end
end
