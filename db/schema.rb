# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_12_182227) do

  create_table "pins", force: :cascade do |t|
    t.float "pos_x"
    t.float "pos_y"
    t.string "pin_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "restinfo_id", null: false
    t.index ["restinfo_id"], name: "index_pins_on_restinfo_id"
  end

  create_table "restinfos", force: :cascade do |t|
    t.string "restname"
    t.string "continent"
    t.string "restkind"
    t.string "header"
    t.string "font"
    t.string "flag"
    t.string "address"
    t.string "openwhen"
    t.text "restexp1"
    t.text "restexp2"
    t.text "mapurl"
    t.string "eatsay1"
    t.string "rest_kor"
    t.string "namemenu1"
    t.string "namemenu2"
    t.string "namemenu3"
    t.text "menu1exp1"
    t.text "menu1exp2"
    t.integer "menu1price"
    t.text "menu2exp1"
    t.text "menu2exp2"
    t.integer "menu2price"
    t.text "menu3exp1"
    t.text "menu3exp2"
    t.integer "menu3price"
    t.float "ratingkakao"
    t.float "ratingnaver"
    t.float "ratinggoogle"
    t.integer "raterskakao"
    t.integer "ratersnaver"
    t.integer "ratersgoogle"
    t.text "kakaourl"
    t.text "naverurl"
    t.text "googleurl"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "tickets", force: :cascade do |t|
    t.text "datepick"
    t.text "name"
    t.text "with"
    t.text "menu"
    t.text "anything"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "ticketid"
  end

  add_foreign_key "pins", "restinfos"
end
