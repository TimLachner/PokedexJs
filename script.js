const pokedex = document.getElementById("pokedex");
let sucht = document.getElementById("sucht");
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 100; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((result) => ({
      name: result.name,
      image: result.sprites["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    }));
    displayPokemon(pokemon);
  });
};

const displayPokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon
    .map(
      (pokemon) => `
        <li class="card">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title">${pokemon.id}. ${pokemon.name}</h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p>
        </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
};
fetchPokemon();

sucht.addEventListener("keydown", (e) => {
  if (!e.repeat) console.log(`Key "${e.key}" pressed  [event: keydown]`);
  else console.log(`Key "${e.key}" repeating  [event: keydown]`);
});
