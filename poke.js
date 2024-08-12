const root = document.querySelector("#root");
root.style.display = "grid";
root.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
root.style.margin = "75px";
root.style.gap = "1rem";
root.style.marginLeft = "32px";

async function fetchData() {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?limit=10000"
  );

  for (let pokemon of data.results) {
    const response = await axios.get(pokemon.url);
    console.log(response.data);

    const card = document.createElement("div");
    card.classList.add("card");
    card.textAlign = "center";

    const img = document.createElement("img"); // Image........
    img.src = response.data.sprites.other.home.front_default;
    // img.src = response.data.sprites.other.home.front_shiny;
    img.style.height = "130px";
    img.style.width = "130px";
    img.style.marginLeft = "0.6rem";
    // img.style.marginBottom = '30px';
    root.append(img);

    const h1 = document.createElement("h1"); // Heading..............
    h1.innerText = response.data.name;
    h1.style.textTransform = "capitalize";
    h1.style.fontWeight = "bold";
    h1.style.textAlign = "center";
    h1.style.fontFamily = "Verdana";
    h1.style.textDecoration = "underline";
    h1.style.fontSize = "1.5rem";

    const weight = document.createElement("p"); // Weight..........
    weight.innerHTML = `Weight: ${response.data.weight}`;
    weight.style.color = "brown";
    weight.style.fontFamily = "monospace";
    weight.style.fontWeight = "bold";
    weight.style.textAlign = "center";
    weight.style.fontSize = "0.9rem";
    root.append(weight);

    const type = document.createElement("p");
    type.innerText = `Type : ${response.data.types[0].type.name}`; // types.........
    type.style.color = "red";
    type.style.fontFamily = "monospace";
    type.style.fontWeight = "bold";
    type.style.textAlign = "center";
    type.style.fontSize = "0.9rem";
    root.append(type);

    const order = document.createElement("order"); // Order........
    order.innerText = `Order : ${response.data.order}`;
    order.style.color = "blue";
    order.style.fontWeight = "bold";
    order.style.fontFamily = "monospace";
    order.style.fontSize = "0.9rem";
    order.style.marginLeft = "2.3rem";
    root.append(order);

    const height = document.createElement("p"); // height...........
    height.innerText = `Height : ${response.data.height}`;
    height.style.fontWeight = "bold";
    height.style.fontFamily = "monospace";
    height.style.fontSize = "0.9rem";
    height.style.textAlign = "center";
    root.append(height);

    const move = document.createElement("p");
    move.innerText = `Move : ${response.data.moves[0].move.name}`;
    move.style.fontWeight = "bold";
    move.style.fontFamily = "monospace";
    move.style.fontSize = "0.9rem";
    move.style.textAlign = "center";
    root.append(move);

    const ability = document.createElement("p");
    ability.innerText = `Ability: ${response.data.abilities[0].ability.name} `; //ability....
    ability.style.fontWeight = "bold";
    ability.style.fontFamily = "monospace";
    ability.style.fontSize = "0.9rem";
    ability.style.textAlign = "center";
    ability.style.color = "#444";
    root.append(ability);

    card.append(img, h1, weight, type, order, height, move, ability);

    root.append(card);
  }
}

fetchData();
