<!DOCTYPE html>
<!DOCTYPE html>

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" type="image/png" href="(assets/img/icon.png)" />
    <title>Pokemon</title>
    <meta name="description" content="" />
    <meta name="author" content="SitePoint" />

    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="shortcut icon" type="image/x-icon" href="assets/img/icon.ico" />
  </head>

<body>

<pre>

<?php
  $pokemonId = $_GET['id'];
  $response = file_get_contents('https://pokeapi.co/api/v2/pokemon/' . $pokemonId . '/');
  $pokemonData = json_decode($response);

  
  $ten = 10;
  $one = 1;

  $pokemonlocation = $_GET['region'];
  $response1 = file_get_contents('https://pokeapi.co/api/v2/location/' . $pokemonId . '/');
  $pokemonl = json_decode($response1);

  $pokemonDescription = $_GET['descriptions'];
  $response2 = file_get_contents('https://pokeapi.co/api/v2/characteristic/' . $pokemonId . '/');
  $pokemond = json_decode($response2);

  ?>
  </pre>

    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/<?php echo $pokemonId ?>.png" width="150" height="100" />
    <h1 class="text"><?= ucwords($pokemonData->name) ?></h1>

    <table>
      <tr>
        <td class="text">Infos:</td>
      </tr>

      <tr>
        <td class="text">Größe: <?php echo $pokemonData->height?>m</td>
      </tr>

      <tr>
        <td class="text">Gewicht: <?php echo $pokemonData->weight ?>kg</td>
      </tr>
      

      <tr>
        <td class="text">Fähigkeit:<?php  ?></td>
      </tr>

      <tr>
      <td class="text">Fundort:<?php  ?></td>
      </tr>

      
    </table>
    <a class="btn buttonv" href="./index.php">zurück</a>
    <p></p>
    <a class="btn buttonv" href="">Vorheriges</a>
    <p></p>
    <a class="btn buttonn" href="./">Nächstes</a>
  </body>
</html>
