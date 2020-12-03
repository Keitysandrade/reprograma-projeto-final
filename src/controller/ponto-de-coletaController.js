const { restart } = require("nodemon");
const pontodecoleta = require ("../model/ponto-de-coleta.js");

const getAll = (req, res) => {
    console.log (req.url);
    restart.send(pontodecoleta);
};

module.exports = {getAll};
