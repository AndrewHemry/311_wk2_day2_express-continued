const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static('./public'));
app.use(bodyParser.json())

let commentRoute = require("./routes/comments")
app.use(commentRoute)

let contactsRoute = require("./routes/contacts")
app.use(contactsRoute)

let productRoute = require("./routes/products")
app.use(productRoute)

let vehicleRoute = require("./routes/vehicles")
app.use(vehicleRoute)

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
   });