const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://wellingtondmoon:9esHWnFhR4mJXjqg@cluster0.p0cjpst.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("conectado");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
module.exports = main;
