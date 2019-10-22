import { getMovies } from './omdb/omdb';
  
const buildList = (movies: string[]) => {
  const cardContainer = document.getElementById("movie-container");
  updateMovies(cardContainer);
  movies.forEach((movie:any) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let paragraph = document.createElement("p");
    card.append(paragraph);
    cardContainer.append(card);
    card.style.backgroundImage = `url(${movie.Poster})`;
    paragraph.innerHTML = `${movie.Title}, ${movie.Year}`;
  });
}

const updateMovies = (cardCont) => {
  return cardCont.removeChild();
}

const searchMovies = () => {
  const searchBar = document.getElementById("search-bar") as HTMLInputElement;
  getMovies(searchBar.value).then((data) => {
    let movieArray:string[] = data.Search;
    buildList(movieArray);
  });
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchMovies);

