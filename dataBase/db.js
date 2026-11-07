import mongoose from "mongoose";

const DB = async () => {
  if (!process.env.MONGO_URI) {
    console.error("Missing MONGO_URI in .env (see .env.example)");
    process.exit(1);
  }
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

export default DB;
