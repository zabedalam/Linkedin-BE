const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_SRV, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((db) => console.log("MongoDB Connected"))
  .catch((err) => console.log(`DB Connection error: ${err.message}`));
module.exports = mongoose;

// mongoose
//   .connect(process.env.MONGO_SRV, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("DB CONNECTED"));
// mongoose.connection.on("error", (err) => {
//   console.log(`DB connection error : ${err.message}`);
// });

// module.exports = mongoose;