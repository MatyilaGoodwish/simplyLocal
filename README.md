
<h1>Data model to save to storage can be Object or Array</h1>


<pre>
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
  </pre>

<h4>Delete data from the storage</h4>

ORM().Delete("SubscriberInformation");


<h4>Save data to the storage</h4>

ORM().Save("SubscriberInformation");

<h4>Read data from the storage</h4>

let mydata = ORM().Read("SubscriberInformation");
