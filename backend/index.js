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
app.listen(port, () => {
  console.log(`Rodando na porta ${port}......`);
});
