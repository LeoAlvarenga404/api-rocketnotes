const  { Router } = require("express");
// Importar o router do express

const NotesController = require('../controllers/NotesController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const notesRoutes = Router();
// executar o router através de uma variável

const notesController = new NotesController();

notesRoutes.use(ensureAuthenticated)

notesRoutes.get("/", notesController.index)
notesRoutes.post("/", notesController.create)
// método post para criar uma nova nota
notesRoutes.get("/:id", notesController.show)
notesRoutes.delete("/:id", notesController.delete)

module.exports = notesRoutes;
// export do arquivo