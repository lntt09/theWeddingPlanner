# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_26_170945) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "band", force: :cascade do |t|
    t.string "bandName"
    t.string "phoneNumber"
  end

  create_table "bands", force: :cascade do |t|
    t.string "bandName"
    t.string "phoneNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "florist", force: :cascade do |t|
    t.string "floristName"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
  end

  create_table "florists", force: :cascade do |t|
    t.string "floristName"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "foodVendor", force: :cascade do |t|
    t.string "fvName"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
  end

  create_table "food_vendors", force: :cascade do |t|
    t.string "fvName"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "planner", force: :cascade do |t|
    t.string "wedding_date"
  end

  create_table "planners", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "wedding_date"
    t.bigint "venues_id"
    t.bigint "food_vendors_id"
    t.bigint "bands_id"
    t.bigint "florists_id"
    t.index ["bands_id"], name: "index_planners_on_bands_id"
    t.index ["florists_id"], name: "index_planners_on_florists_id"
    t.index ["food_vendors_id"], name: "index_planners_on_food_vendors_id"
    t.index ["venues_id"], name: "index_planners_on_venues_id"
  end

  create_table "user", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.bigint "planners_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["planners_id"], name: "index_users_on_planners_id"
  end

  create_table "venue", force: :cascade do |t|
    t.string "venue_name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
  end

  create_table "venues", force: :cascade do |t|
    t.string "venue_name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phoneNumber"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "planners", "bands", column: "bands_id"
  add_foreign_key "planners", "florists", column: "florists_id"
  add_foreign_key "planners", "food_vendors", column: "food_vendors_id"
  add_foreign_key "planners", "venues", column: "venues_id"
  add_foreign_key "users", "planners", column: "planners_id"
end
