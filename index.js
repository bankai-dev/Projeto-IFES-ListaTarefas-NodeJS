// framework express
const express = require("express");

const app = express();

app.listen(3000);
// Importação do banco de dados
const database = require("./db/db");
//Importação dos modelos do banco de dados
const Usuario = require('./model/usuarioModel');

const Tarefa = require('./model/tarefaModel');

const routes = require('./routes/routes');

// Codificação JSON
app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// Rota principal

app.use("/", routes);


app.get("/",(req,res)=>{
  return res.json({message: "Sistema de lista de tarefas"})
});

try{
  database.sync().then(() => {
  })
} catch(erro) {
  console.log("Houve uma falha ao sincronizar com o banco de dados", erro);
};