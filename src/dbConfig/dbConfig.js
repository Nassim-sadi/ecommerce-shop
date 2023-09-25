import mongoose from 'mongoose';

export async function connect() {
  try {
    mongoose.connect(process.env.MONGOOSE_URI);
    const connect = mongoose.connection;
    connect.on('connected', () => {
      console.log('Connection successful');
    });

    connect.on('error', () => {
      console.log('MongoDB connection error, make sure mongodb is running');
    });
  } catch (error) {
    console.log('something went wrong ');
    console.log('error');
  }
}
