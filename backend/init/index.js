const sampleBooks = require("./data");
const Books = require("../models/books");

const mongoose = require("mongoose");
const url = process.env.MONGO_ATLAS_URI;

async function main() {
  await mongoose.connect(url);
}

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await Books.deleteMany({});
  await Books.insertMany(sampleBooks.data);
  console.log("data was initialized");
};

initDB();
