require("dotenv-safe").config();
const express = require("express")
const mongoose = require ("mongoose")
const app = express()

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conexão feita com sucesso.")
});


const index = require("./routes/index")
const pontos = require("./routes/pontos")

app.use(bodyParser.json());

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



