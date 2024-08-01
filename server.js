import express, { Router } from "express";
import publicRoutes from "./routes/public.js"; // Importando as rotas públicas
import privateRoutes from "./routes/private.js";

import auth from './middlewares/auth.js'

const app = express();
app.use(express.json()); // Habilitando o uso de JSON

app.use("/", publicRoutes); // Rota principal
app.use("/", auth, privateRoutes); // Rota privada


app.listen(3000, () => console.log("Servidor Rodando na porta 3000"));

