const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const productRouter = require("./routes/product");

//middleWares
app.use(express.json());

//start the server
connectDB();

//routes

app.use("/api/product", productRouter);

//lunch the Server

const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Server is Running on port ${port}....`);
});
