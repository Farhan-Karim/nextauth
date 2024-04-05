import Mongoose from "mongoose";

const connectDB = async () => {
  if (Mongoose.Collection[0].readyState) return;
  try {
    await Mongoose.connect(process.env.MongoURL, {
      useNewURLParse: true,
      useUnifiedTopology: true,
    });
    console.log("sucessfully connected to database");
  } catch (erro) {
    throw new error("Error while connecting to database");
  }
};

export default connectDB;
