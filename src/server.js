require("dotenv/config")
require("express-async-errors");
const migrationsRun = require("./database/sqlite/migrations")

const AppError = require("./utils/AppError")

const uploadConfig = require("./configs/upload")

const cors = require("cors")
const express = require("express");
// Importar o express

const routes = require("./routes/index")
// importgando uma variável da pasta routes

migrationsRun();

const app = express();
// inicializar o express
app.use(cors());

app.use(express.json())
// fazer com que ele interprete o JSON

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes);

app.use((error, request, response, next) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    })
  }

  console.error(error);

  return response.status(500).json({
    status: "error",
    message: "Internal server error"
  })

});
// tratamento de excessões, verificar se o erro foi do servidor ou do cliente

const PORT = process.env.PORT || 3333       ;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
// porta que vai atender as requisições

