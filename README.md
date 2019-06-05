
#Data model to save to storage can be Object or Array
let SubscriberInformation = {
                  customerName: "thembi",
                  customerSurname: "matyila",
                  phone: "082 632 5761",
                  email: "goodwish@axxess.co.za",
                  address_line: "3763 bluegum road",
                  address_line2: "section h",
                  city: "stretford",
                  town:"vereeniging",
                  country: "south africa",
                  zip: "1984"
}

#Delete data from the storage
ORM().Delete("SubscriberInformation");


#Save data to the storage
ORM().Save("SubscriberInformation");

#Read data from the storage
let mydata = ORM().Read("SubscriberInformation");