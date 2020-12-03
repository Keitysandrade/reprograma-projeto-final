const express = require ('express');
const app = express ();

const index = require ('./route/index');
const pontodecoleta = require ('./route/ponto-de-coletaRoute');

app.use((req, res, next) => {
    console.log ('Nova requisicao realizada');

    next ();
});
app.use('/', index);
app.use('/pontodecoleta',pontodecoleta);

module.exports = app;

//require("dotenv-safe").config();
//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");

//mongoose.connect(`${process.env.MONGODB_URL}`, {
  //useNewUrlParser: true,
  //: true,
//});

//let db = mongoose.connection; 
//db.on("error", console.log.bind(console, "Connection error!"));
//db.once("open", () => {
 // console.log("Sucessfully connected!");
//});

//const index = require("./routes/index");
//const candidates = require("./routes/candidatesRoute");

//app.use(express.json());

//app.use((req, res, next) => {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header(
  //  "Access-Control-Allow-Headers",
   // "Origin, X-Request-With, Content-Type, Accept"
 // );
 // next();
//});

//app.use("/", index);
//app.use("/candidaturas-negras", candidates);

//module.exports = app;