document.addEventListener('DOMContentLoaded', function() {
  // 1. Obtener el elemento HTML
  const charactersContenedor = document.getElementById('characters');

  //Hacer la peticion GET
  fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
      const characters = data.results;
      
  //Crear el elemento HTML para cada personaje
  characters.forEach( character => {
    const characterElement = document.createElement('article')
    characterElement.innerHTML = `
      <img src="${character.image}" alt="${character.name}">
      <h2>${character.name}</h2>
      <p>Status: ${character.status}</p>
      <p>Gender: ${character.gender}</p>
    `;
    charactersContenedor.appendChild(characterElement);
  });
}).catch(error => console.log(error));

})
