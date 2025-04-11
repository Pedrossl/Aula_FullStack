import express from "express";
import knex from "knex";
import cors from "cors";

const app = express();
const port = 3003;
app.use(express.json());
app.use(cors());

const knexDb = knex({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "lobato",
    password: "root",
    database: "live",
  },
});

app.get("/", (req, res) => {
  res.send("Bom dia");
});

app.get("/viewers", async (req, res) => {
  const viewer = await knexDb("viewer").select("*");
  res.status(200).json({ viewer });
});

app.get("/viewer/:id", async (req, res) => {
  const { id } = req.params;
  const viewer = await knexDb("viewer").select("*").where({ id }).first();
  res.json(viewer);
});

app.get("/tipos", async (req, res) => {
  const allTipos = await knexDb("tipo").select("*");
  res.status(200).json({ allTipos });
});

app.post("/viewer", async (req, res) => {
  const { nome, nick, tipo_id, foto, moderador } = req.body;
  await knexDb("viewer").insert({ nome, nick, tipo_id, foto, moderador });
  res.status(200).json({ message: "Usuário foi isnerido com sucesso" });
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}......`);
});
