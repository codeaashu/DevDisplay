import mongoose from 'mongoose';
import CONSTANTS from '../constants.js';

async function connectToDatabase() {
  try {
    const uri = CONSTANTS.MONGODB_URL;
    const { connection } = await mongoose.connect(uri);
    if(CONSTANTS.ENV === 'development') {
      console.log(`🗄️  Connected to: ${uri}`);
    }
    console.info(`⚙️  MongoDB connected, DB HOST: ${connection.host}`);
  } catch (error) {
    console.error("⚠️  Error connecting to the database:", error);
    process.exit(1);
  }
}

export default connectToDatabase;