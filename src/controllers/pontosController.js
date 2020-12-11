const ponto = require("../models/pontos.js")

//funcionando // para listar todos
const getAllPontos = (req, res) => {
console.log(req.url);
 ponto.find(function (err, resultado) {
    if (err) {
    res.status(500).send({ message: err.message })
}
    res.status(200).send(resultado);
})
};


//funcionando /para filtrar or tipo de resíduo
const getByResiduo = (req, res) => {
const tipoDeResiduo = req.query.tipoDeResiduo;
console.log(tipoDeResiduo)
 ponto.find({ tipoDeResiduo: tipoDeResiduo }, function (err, resposta) {
     if (err) {
    res.status(500).send({
     message: err.message,
     message: "Erro"
});
}
    if (resposta.length > 0) {
    res.status(200).send(resposta)
}
    else {
    res.status(500).send({ message: "Tipo de Residuo não existe" })
}
});
};


//funcionando // para criar
const createPonto = (req, res) => {
    console.log(req.body)
    let pontoaCriar = new ponto(req.body)

    pontoaCriar.save(function (err) {
        res.status(200).send(pontoaCriar.toJSON())
    })

};

// funcionando // para editar  informações
const updatePonto = (req, res) => {
const id = req.params.id;

ponto.find({ id }, function (err, resultado) {
    if (resultado.length > 0) {

 ponto.updateMany({ id }, { $set: req.body }, function (err) {
    if (err) {
     res.status(500).send({ message: err.message })
 }
     res.status(200).send({ message: "Ponto alterado com sucesso" })
 })
 } else {
     res.status(500).send({ message: "Não há registros para serem atualizados com esse id" })
 }
})

}

// funcionando // para deletar um id
const deletePonto = (req, res) => {
const id = req.params.id;
ponto.find({ id: id }, function (err, resposta) {
 console.log(resposta)
    if (resposta) {
ponto.deleteOne({ id }, function (err) {
    if (err) {
    res.status(500).send({ message: err.message })
 }
    res.status(200).send({ message: "Ponto excluido com sucesso!" })
 })
}
    else {
    res.status(200).send({ message: "Não há ponto para ser excluido" })
};
});
};





module.exports = {
    getAllPontos,
    getByResiduo,
    createPonto,
    updatePonto,
    deletePonto

}