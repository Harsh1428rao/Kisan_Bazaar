const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://eshalal9693:bh10GQHSSMnFsolr@kisaanbazar2.6cijf.mongodb.net/kisaanDB?retryWrites=true&w=majority&appName=KisaanBazar2", {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
