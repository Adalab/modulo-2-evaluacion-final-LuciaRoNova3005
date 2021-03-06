//Si el array que guarda la informacion del local tiene contenido me ejecutas Recupero los datos y lo pinto

//Funcion que escucha click en las peliculas y en las peliculas de favoritas con la js-shows//
function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}
function handleClickFav(event) {
  // Identificar la li pulsada
  const selectCardFav = event.currentTarget;
  // Obtener la información asociada a la serie
  const filmId = parseInt(selectCardFav.dataset.id);
  //Buscamos si elemento clicado esta en nuestro array de favoritos
  const idExist = arrayFavorite.find(
    (favoritedata) => favoritedata.show.id === filmId
  );

  if (idExist === undefined) {
    // El ID del array en el que se ha hecho click no está en el array de favoritos lo añade
    const Objseriedata = arrayShows.find(
      (seriedata) => seriedata.show.id === filmId
    );
    arrayFavorite.push(Objseriedata);

    // El ID del array en el que se ha hecho click esta en el array de favoritos hace un filtro para eliminarlo
  } else {
    arrayFavorite = arrayFavorite.filter((fav) => fav.show.id !== filmId);
  }
  // Pinta las tarjetas en favoritas y las guarda en local
  renderFavorites();
  renderShows();
  savedFav();
}
