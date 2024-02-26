const express = require("express");
const pokemons = require("./pokemons");
const { succes, error, notFound } = require("./helper");

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
});

app.get("/pokemons/:id", (req, res) => {
  const id = req.params.id;
  const pokemon = pokemons.find((p) => p.id === +id);
  if (pokemon) {
    succes(res, "Voici le pokémon demandé", pokemon);
  } else {
    error(res, `Le pokémon avec l'id ${id} n'existe pas`);
  }
});

app.get("/pokemons", (req, res) => {
  succes(res, "Voici la liste des pokémons", pokemons);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
