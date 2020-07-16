/*CONTAINER*/

const pokedex = document.getElementById("pokedex");
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

/*SUCHE*/

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
    console.log("---------------");
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

/*TOPBUTTON*/

topButton = document.getElementById("topBtn");

window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = "0";
  document.documentElement.scrollTop = "0";
}

/*FLIP*/

card = document.getElementById("container");
cardback = document.getElementById("cb");

card.addEventListener("click", flip);

function flip() {
  console.log("CLICK");
}
