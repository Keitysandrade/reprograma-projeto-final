const ponto = require("../models/pontos.js")

//funcionando
const getAllPontos = (req, res) => {

console.log(req.url);
 ponto.find(function(err, resultado){
    if(err) { 
      res.status(500).send({ message: err.message })
    }
    res.status(200).send(resultado);
  })
};


//não está funcionando
const getByResiduo = (req, res) => {
    const tipoDeResiduo = req.query.tipoDeResiduo;
    console.log (tipoDeResiduo)
 ponto.find({ tipoDeResiduo: tipoDeResiduo}, function(err, resposta){
   if (err ){
    res.status(500).send({message: err.message,
        message: "Erro"});
   }
    if (resposta.length> 0){

        res.status(200).send(resposta)
    }
    else 
{
res.status(500).send({ message: "Tipo de Residuo não existe"})
}
});
};


//funcionando
const createPonto = (req, res) => {
    console.log (req.body)
    let pontoaCriar = new ponto(req.body)

    pontoaCriar.save(function(err){
        res.status(200).send(pontoaCriar.toJSON())
   })

      };

      //funcionando
const updatePonto = (req, res) => {
    const id = req.params.id;

    ponto.find({ id }, function(err, resultado){
      if(resultado.length> 0){
                
        ponto.updateMany({ id }, { $set : req.body }, function (err) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.status(200).send({ message: "Ponto alterado com sucesso"})
        })
      }else {
        res.status(500).send({ message: "Não há registros para serem atualizados com esse id"})
      }
    })
  
  }
  
//não está funcionando
const deletePonto = (req, res) => {

     const id = req.query.id;
    ponto.deleteMany({ id }), function (err){
        if(err) {
            res.status(500).send({ message: err.message })
        }else {
            res.status(200).send({ message: "Ponto removido com sucesso"})
        }
    }
}



module.exports = {
    getAllPontos,
    getByResiduo,
    createPonto, 
    updatePonto,
    deletePonto

}