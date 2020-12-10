const express = require("express")
const app = express()
const mongoose = require ("mongoose")

app.use(express.json())
mongoose.connect("mongodb://localhost:27017/pontodecoleta", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conexão feita com sucesso.")
});


const index = require("./routes/index")
const pontos = require("./routes/pontos")


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/pontos", pontos)


module.exports = app



//require("dotenv-safe").config();
//const express = require("express");
//const app = express();
//const mongoose = require("mongoose");

//mongoose.connect(`${process.env.MONGODB_URL}`, {
  //useNewUrlParser: true,
  //useUnifiedTopology: true,
//});

//let db = mongoose.connection; 
//db.on("error", console.log.bind(console, "Erro de conexão!"));
//db.once("open", () => {
 // console.log("Conectado com sucesso!");
//});

//const index = require("./routes/index");
//const ponto = require("./routes/ponto-de-coletaRoute");

//app.use(express.json());

//app.use((req, res, next) => {
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header(
    //"Access-Control-Allow-Headers",
    //"Origin, X-Request-With, Content-Type, Accept"
  //);
  //next();
//});

//app.use("/", index);
//app.use("/ponto-de-coleta", ponto);

//module.exports = app;
