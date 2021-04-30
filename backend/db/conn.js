const mongoose = require("mongoose");

const Db =
  "mongodb+srv://test:test123@cluster0.f1u7a.mongodb.net/workshop?retryWrites=true&w=majority";
mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((e) => {
    console.log(e);
  });
