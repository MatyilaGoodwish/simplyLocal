
<h4>Data model to save to storage can be Object or Array</h4>


<pre>
let Customer = {
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

<p class="color:silver">
    This will cause the object itself with its name to be saved directly to the localStorage with the same object name it can be retrieved from the storage, still implementing events that will listen to data changes and update the object using fast caching.    
</p>

<h4>Delete data from the storage</h4>

ORM().Delete("Customer");

<h4>Save data to the storage</h4>

ORM().Save("Customer"); 

<h4>Read data from the storage</h4>

let mydata = ORM().Read("Customer");
