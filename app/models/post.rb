class Post < ApplicationRecord

    def address
        cityName = "BC"
        countryName = "Canada"
        [:streetAddress, :cityAddress, cityName, countryName].compact.join(', ')
    end
    
    geocoded_by :address
    after_validation :geocode

end
