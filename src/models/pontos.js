const mongoose = require("mongoose");
const pontoSchema = new mongoose.Schema(
  {
    id: { type: Number},
    tipoDeResiduo: { type: String },
    bairro: { type: String },
    endereço: { type: String },
    telefone: {type: Number}
   
 },
 {
   versionKey: false
 }
);

const ponto = mongoose.model("collectionPontosdecoleta", pontoSchema);

module.exports = ponto