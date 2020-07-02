const pokedex = document.getElementById("pokedex");
const fetchPokemon = () => {
  const promises = [];
  for (let i = 1; i <= 300; i++) {
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
        <li  id="c" class="card" data-card-id="${pokemon.id}">
            <img class="card-image" src="${pokemon.image}"/>
            <h2 class="card-title"><span>${pokemon.id}.</span> <span class="poke-name" data-id="${pokemon.id}">${pokemon.name}</span></h2>
            <p class="card-subtitle">Type: ${pokemon.type}</p>

        </li>
    `
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString;
};
fetchPokemon();

var el = document.getElementById("suchtext");
console.log(el);
el.addEventListener("input", logkey);

function logkey(e) {
  var input = document.getElementById("suchtext").value;
  console.log(input);
  mySearchFunction();
}

function mySearchFunction() {
  var input, filter, ul, li, item, i, txtValue;
  input = document.getElementById("suchtext");
  filter = input.value;
  container = document.getElementsByClassName("poke-name");

  for (i = 0; i < container.length; i++) {
    pokeName = container[i];
    console.log(pokeName.textContent);
    console.log(pokeName.getAttribute("data-id"));
    console.log(
      document.querySelector(
        "[data-card-id='" + pokeName.getAttribute("data-id") + "']  .poke-name"
      )
    );

    var title = document.querySelectorAll(
      "[data-card-id='" + pokeName.getAttribute("data-id") + "'] .poke-name"
    );
    var card = document.querySelectorAll(
      "[data-card-id='" + pokeName.getAttribute("data-id") + "']"
    );

    title = title[0];
    card = card[0];
    card.style.display = "none";
    txtValue = title.innerText;
    ç;
    console.log(txtValue);
    console.log(filter);
    console.log(txtValue.indexOf(filter.toLowerCase()));
    console.log("---------------");
    if (txtValue.indexOf(filter.toLowerCase()) > -1) {
      card.style.display = "block";
      console.log("show");
    }
  }
}

var elements = document.getElementsByClassName("li");
console.log(elements);
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", flip);
}

function flip() {
  console.log("---------------");
  console.log("Click");
  console.log("---------------");
  evl.style.display = "none";
}
