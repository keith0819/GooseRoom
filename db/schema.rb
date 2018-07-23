# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_23_210344) do

  create_table "posts", options: "ENGINE=InnoDB DEFAULT CHARSET=utf8", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.string "phoneNumber"
    t.string "offerType"
    t.string "roomType"
    t.string "monthlyFee"
    t.string "deposit"
    t.string "streetAddress"
    t.string "cityAddress"
    t.string "postalCode"
    t.string "aboutFloor"
    t.string "aboutBed"
    t.string "aboutFurniture"
    t.string "aboutLaundry"
    t.string "aboutWifi"
    t.string "utilityExpenses"
    t.string "aboutPets"
    t.string "aboutSmoking"
    t.string "aboutDrugs"
    t.string "aboutParking"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
