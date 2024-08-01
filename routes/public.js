import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt, { hash } from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

// Cadastro
router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);
    const JWT_SECRET = process.env.JWT_SECRET;

    const userDB = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashPassword,
      },
    });
    res.status(201).json(userDB);
  } catch (err) {
    res.status(400).json({ error: "Erro ao criar usuário" });
  }
});

//login com jwt

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;
    //Busca o usuário no banco de dados
    const user = await prisma.user.findUnique({
      where: {
        email: userInfo.email,
      },
    });
    //Verifica se o usuário existe
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    //compara a senha do usuário com a senha do banco de dados
    const isMatch = await bcrypt.compare(userInfo.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciais inválidas" });
    }
    //Gerar o token jwt
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor, tente novamente" });
  }
});

export default router;
