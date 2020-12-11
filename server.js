const app = require("./src/app")
const PORT = process.env.PORT;

app.listen(port, () => {
    console.log(`Servidor está rodando na ${PORT} port`);
});