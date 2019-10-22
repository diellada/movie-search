import { getMovies } from './omdb/omdb';

const updateMovies = (cardConts) => {
  let rangeObj = new Range();
  rangeObj.selectNodeContents(cardConts);
  rangeObj.deleteContents();
  console.log(cardConts);
  return cardConts;
}
  
const buildList = (movies) => {
  const cardContainer = document.getElementById("movie-container");
  updateMovies(cardContainer);
  // $("#movie-container").empty();
  movies.forEach((movie) => {
    let card = document.createElement("div");
    card.classList.add("card");
    let paragraph = document.createElement("p");
    // let cardText = document.createElement("div");
    // cardText.classList.add("card-text");
    card.append(paragraph);
    // card.append(cardText);
    cardContainer.append(card);
    card.style.backgroundImage = `url(${movie.Poster})`;
    paragraph.innerHTML = `${movie.Title} (${movie.Year})`;
    // cardText.innerHTML = `${movie.Plot}`;
    // console.log(cardContainer);
  });
}



const searchMovies = () => {
  const searchBar = document.getElementById("search-bar") as HTMLInputElement;
  getMovies(searchBar.value).then((data) => {
    let movieArray:string[] = data.Search;
    buildList(movieArray);
    console.log(movieArray);
  });
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchMovies);

