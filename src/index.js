// Effectue une requête pour obtenir les artistes depuis l'API
const response = await fetch(
    "https://webmob-ui-22-spotlified.herokuapp.com/api/artists"
  );
  
  // Convertit la réponse en JSON
  const artists = await response.json();
  
  // Sélectionne l'élément de la liste des artistes dans le DOM
  const artistList = document.querySelector(".artist-list");
  
  // Vide le contenu actuel de la liste des artistes
  artistList.innerHTML = "";
  
  // Parcourt chaque artiste et crée un élément pour chacun
  artists.forEach((artist) => {
    // Crée un nouvel élément de lien pour l'artiste
    const artistItem = document.createElement("a");
  
    // Définit le contenu HTML de l'élément de l'artiste
    artistItem.innerHTML = `
        <img src="${artist.image_url}" />
        <div class="artist-list-item-title">${artist.name}</div>
    `;
  
    // Ajoute l'élément de l'artiste à la liste des artistes
    artistList.append(artistItem);
  });
  