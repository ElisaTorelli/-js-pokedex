
let cardContainer = document.querySelector(".main__container");

function displayPokemon() {
    for(let i = 1; i < 151; i++){
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then((response) => response.json())
            .then((data) => {
                (cardContainer.innerHTML += `
                <div class="pokemonCard ${data.types[0].type.name}">
                    <img src="${data.sprites.front_default}" alt="img">
                    <div class="card__info">
                        <span>#${data.id}</span>
                        <h4>${data.name}</h4>
                        <h6>Type: ${data.types[0].type.name}</h6>
                    </div>
                </div>`
                )
            }
        );
    }
}

displayPokemon();