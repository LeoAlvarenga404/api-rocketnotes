const { Router } = require("express")

const usersRouter = require("./users.routes")
const notesRouter = require("./notes.routes")
const tagsRouter = require("./tags.routes")
const sessionsRouter = require("./sessions.routes")
// exportando uma variável

const routes = Router()
// Reunir todas as rotas da aplicação

routes.use("/users", usersRouter)
routes.use("/sessions", sessionsRouter)
routes.use("/notes", notesRouter)
routes.use("/tags", tagsRouter)

module.exports = routes;