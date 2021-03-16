const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./routing/html-routes")(app);
require("./routing/api-routes")(app);

app.listen(PORT, function() {
   
});
