// framework express
const express = require("express");

const router = express.Router();

const usuarioController = require("../controller/usuarioController");

const tarefaController = require("../controller/tarefaController");

// requisição http principal
router.get("/",(req,res) =>{
  return res.json({message: "Sistema de lista de tarefas"});
})

// POST - CADASTRAR

router.post("/usuarios/Cadastrar", usuarioController.UsuarioCreate);

// GET - LISTAR
router.get("/usuarios/:id?", usuarioController.UsuarioListar);

// PUT - UPDATE

router.put("/usuarios/:id", usuarioController.UsuarioUpdate);

// DELETE

router.delete("/usuarios/:id", usuarioController.UsuarioDelete);

// POST - CADASTRAR

router.post("/tarefas/Cadastrar", tarefaController.TarefaCreate);

// GET - LISTAR
router.get("/tarefas/:id?", tarefaController.TarefaListar);

// PUT - UPDATE

router.put("/tarefas/:id", tarefaController.TarefaUpdate);

// DELETE

router.delete("/tarefas/:id", tarefaController.TarefaDelete);

module.exports = router;