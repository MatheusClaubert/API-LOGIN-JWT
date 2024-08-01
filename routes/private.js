import express from "express";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/listar-usuarios", async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json({ message:'Usuários listado com sucesso! ',users});
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Erro no servidor, tente novamente" });
    }
});

export default router
