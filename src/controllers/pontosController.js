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
    const tipoDeResiduo = req.params.tipoDeResiduo;
                      //chave : valor
 ponto.find({ tipoDeResiduo }, function(err, resposta){
     
if (tipoDeResiduo.length> 0){
    if (err){
        res.status(500).send({message: err.message,
        message: "Erro"});

    }
    res.status(200).send(ponto)
} else{
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

const updatePonto = (req, res) => {
    const id = req.params.id;

    ponto.find({ id }, function(err, resultado){
      if(resultado.length> 0){
        //faz o update apenas para quem respeitar o id passado no parametro
        // set são os valores que serão atualizados
        //UpdateMany atualiza vários registros de uma unica vez
        //UpdateOne atualiza um único registro por vez
        
        ponto.updateMany({ id }, { $set : req.body }, function (err) {
          if (err) {
            res.status(500).send({ message: err.message })
          }
          res.status(200).send({ message: "Registro alterado com sucesso"})
        })
      }else {
        res.status(200).send({ message: "Não há registros para serem atualizados com esse id"})
      }
    })
  
  }
  


const deletePonto = (req, res) => {
    try {
        const pontoId = req.params.id
        const pontoFound = pontos.find(ponto => ponto.id == pontoId) // encontro o ponto pelo id
        const pontoIndex = pontos.indexOf(pontoFound) // identifico o índice do ponto no meu array

        if (pontoIndex >= 0) { // verifico se o ponto existe no array de pontos
            pontos.splice(pontoIndex, 1) // removo o ponto pelo índice
        } else {
            res.status(404).send({ message: "Ponto não encontrado para ser deletado" })
        }

        fs.writeFile("./src/models/ponto.json", JSON.stringify(pontos), 'utf8', function (err) { // gravo meu array de pontos sem o ponto que deletei
            if (err) {
                res.status(500).send({ message: err })
            } else {
                console.log("Ponto deletado com sucesso!")
                res.sendStatus(204)
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: "Erro ao deletar o ponto" })
    }
}



module.exports = {
    getAllPontos,
    getByResiduo,
    createPonto, 
    updatePonto,
    deletePonto

}