let offset = 0;
const limit = 20; // Cantidad inicial de Pokémon a cargar
let loading = false; // Variable para evitar múltiples solicitudes de carga
let pokemonData = [];

async function fetchPokemonData() {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
        const data = await response.json();

        pokemonData = [...pokemonData, ...data.results];

        const pokemonDetails = await Promise.all(pokemonData.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
        }));

        const pokemonListElement = document.getElementById('pokemon-list');
        const loadingMessage = document.getElementById('loading-message');

        pokemonListElement.innerHTML = ''; // Limpiar contenido existente

        pokemonDetails.forEach((pokemon) => {
            const pokemonElement = document.createElement('div');
            pokemonElement.className = 'pokemon-card';
            pokemonElement.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" onclick="showPokemonDetail('${pokemon.name}', '${pokemon.sprites.front_default}', '${pokemon.abilities.map(ability => ability.ability.name).join(', ')}')">
                <h2>${pokemon.name}</h2>
                <p> ID:${pokemon.id}</p><hr>
                <p><strong>Habilidades:</strong> ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                
            `;
            pokemonListElement.appendChild(pokemonElement);
        });

        loadingMessage.style.display = 'none';
        loading = false;
    } catch (error) {
        console.error('Error al conectar con los datos de Pokémon:', error);
    }
}

function loadMorePokemon() {
    if (!loading) {
        loading = true;
        offset += limit;
        const loadingMessage = document.getElementById('loading-message');
        loadingMessage.style.display = 'block';
        fetchPokemonData();
    }
}

function filterPokemonByName() {
    const filterValue = document.getElementById('name-filter').value.toLowerCase();
    const filteredPokemon = pokemonData.filter(pokemon => pokemon.name.toLowerCase().includes(filterValue));

    const pokemonListElement = document.getElementById('pokemon-list');
    const loadingMessage = document.getElementById('loading-message');

    pokemonListElement.innerHTML = ''; // Limpiar contenido existente

    filteredPokemon.forEach(async (pokemon) => {
        const pokemonResponse = await fetch(pokemon.url);
        const pokemonDetails = await pokemonResponse.json();

        const pokemonElement = document.createElement('div');
        pokemonElement.className = 'pokemon-card';
        pokemonElement.innerHTML = `
            <img src="${pokemonDetails.sprites.front_default}" alt="${pokemonDetails.name}" onclick="showPokemonDetail('${pokemonDetails.name}', '${pokemonDetails.sprites.front_default}', '${pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}')">
            <h2>${pokemonDetails.name}</h2>
            <p><strong>Habilidades:</strong> ${pokemonDetails.abilities.map(ability => ability.ability.name).join(', ')}</p>
            <hr>
        `;
        pokemonListElement.appendChild(pokemonElement);
    });

    loadingMessage.style.display = 'none';
    loading = false;
}

// Función para mostrar el detalle ampliado del Pokémon
function showPokemonDetail(name, imageUrl, abilities) {
    const detailImage = document.getElementById('detail-image');
    const detailName = document.getElementById('detail-name');
    const detailAbilities = document.getElementById('detail-abilities');

    detailImage.src = imageUrl;
    detailName.textContent = name;
    detailAbilities.textContent = `Habilidades: ${abilities}`;

    const pokemonDetail = document.getElementById('pokemon-detail');
    pokemonDetail.style.display = 'flex';

    // Ocultar el detalle al hacer clic fuera del área de detalle
    pokemonDetail.addEventListener('click', () => {
        pokemonDetail.style.display = 'none';
    });
}

// Event listener para detectar el scroll y cargar más Pokémon al llegar al final de la página
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
        loadMorePokemon();
    }
});

// Cargar Pokémon inicialmente
fetchPokemonData();