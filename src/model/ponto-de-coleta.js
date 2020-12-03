const mongoose = require("mongoose");
const pontoSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    tipoDeResiduo: { type: String },
    bairro: { type: String },
    endereço: { type: String }
   
  },
  {
    versionKey: false
  }
);

const ponto = mongoose.model("collectionPonto", pontoSchema);

module.exports = candidates