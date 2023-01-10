const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  // "mongodb+srv://DELL:Alienware@cluster0.mxjoowb.mongodb.net/?retryWrites=true&w=majority";
  // "mongodb+srv://DELL:Alienware@cluster0.mxjoowb.mongodb.net/test";
  "mongodb+srv://Ratan_Singh:%40Password08@cluster0.cht9f1k.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");
});