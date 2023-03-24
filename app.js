const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

//db connection
const conn = require("./db/conn");
conn();

const routes = require("./routes/router");

app.use("/api", routes);
app.listen(3000, function () {
  console.log("hello word");
});
