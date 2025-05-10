import { connect } from 'mongoose';

const connectDb = async () => {
  const db_uri = process.env.MONGO_URI;
  const db_name = process.env.DB_NAME;
  console.log(db_uri);
  console.log(db_name);
  try {
    const connectionInstance = await connect(`${db_uri}/${db_name}`);
    console.log(`${db_uri}/${db_name}`);
    if (connectionInstance) {
      console.log(`Connected to MongoDB: ${connectionInstance.connection.host}`);
    }
  } catch (error) {
    console.log(`Something went wrong while connecting to DB: ${error}`);
    process.exit(1);
  }
};

export default connectDb;
