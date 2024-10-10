import mongoose from "mongoose";
let connectDataBase = async () => {
  try {
    const url = process.env.DB_url;
    await mongoose.connect(_url);
    console.log("connected to DataBase!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export { connectDataBase };
