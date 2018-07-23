class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :firstName
      t.string :lastName
      t.string :email
      t.string :phoneNumber
      t.string :offerType
      t.string :roomType
      t.string :monthlyFee
      t.string :deposit
      t.string :streetAddress
      t.string :cityAddress
      t.string :postalCode
      t.string :aboutFloor
      t.string :aboutBed
      t.string :aboutFurniture
      t.string :aboutLaundry
      t.string :aboutWifi
      t.string :utilityExpenses
      t.string :aboutPets
      t.string :aboutSmoking
      t.string :aboutDrugs
      t.string :aboutParking

      t.timestamps
    end
  end
end
