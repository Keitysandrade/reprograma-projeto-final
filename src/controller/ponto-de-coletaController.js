const pontoModel = require("../models/ponto-de-coleta");

const allPonto = (req, res) => {
  pontoModel.find((err, pontoList) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(200).send(pontoList);
  });
};

const createPonto = (req, res) => {
  const newPonto = new pontoModel(req.body);
  newPonto.save((err) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    }
    res.status(201).send({
      message: "Registrado com sucesso!",
      ponto: newPonto,
    });
  });
};

const updatePonto = (req, res) => {
  const id = req.params.id;
  const updatePonto = req.body;

  pontoModel.findByIdAndUpdate(id, updatePonto, (err, ponto) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (ponto) {
      return res.status(200).send("Atualizado com sucesso!");
    }
    res.status(404).send("Registro não encontrado!");
  });
};

const removePonto = (req, res) => {
  const id = req.params.id;

 pontoModel.findByIdAndDelete(id, (err, ponto) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (ponto) {
      return res.status(200).send("Removido com sucesso!");
    }
    res.status(404).send("Registro não encontrado!")
  });
};

module.exports = {
  allPonto,
  createPonto,
  updatePonto,
  removePonto
};