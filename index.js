const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: false }));   // this will print the password over the console

app.use(express.json());
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html")); // use to append the file  in the default page
});

app.listen(port, () => {
  console.log(`Server is Woring on port: ${port}`);
});