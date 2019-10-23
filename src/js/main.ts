import { getMovies } from './omdb/omdb';

let yearArray = [];

const updateMovies = (cardConts: HTMLElement) => {
  let rangeObj = new Range();
  rangeObj.selectNodeContents(cardConts);
  rangeObj.deleteContents();
  return cardConts;
}

const filterMovies = (movies, year) => {
  let filteredMovies = movies.filter(movie => {
    return Number(movie.Year) === Number(year);
  })
  return filteredMovies;
}

const buildDropdown = () => {
  yearArray.sort(function(a, b){return a-b});
  const yearDropdown = document.getElementById("dropdown-list");
  yearDropdown.style.display = "block";
  yearArray.forEach(year => {
    let listElement = document.createElement("li");
    listElement.classList.add("year-element");
    yearDropdown.append(listElement);
    listElement.innerText = year;
  })
}

const buildList = (movies) => {
  const cardContainer = document.getElementById("movie-container");
  updateMovies(cardContainer);
  let year;
  let filteredMovies = year ?  filterMovies(movies, year) : movies;
  filteredMovies.forEach((movie) => {
    yearArray.push(movie.Year);

    let card = document.createElement("div");
    card.classList.add("card");
    let paragraph = document.createElement("p");
    card.append(paragraph);
    cardContainer.append(card);
    card.style.backgroundImage = `url(${movie.Poster})`;
    paragraph.innerHTML = `${movie.Title} (${movie.Year})`;
  });
}


const searchMovies = () => {
  const searchBar = document.getElementById("search-bar") as HTMLInputElement;

  getMovies(searchBar.value).then((data) => {
    let movieArray: string[] = data.Search;
    buildList(movieArray);
    buildDropdown();
  })
  .catch((error) => {
    console.log(error);
    const cardContainer = document.getElementById("movie-container");
    cardContainer.innerText = "Please enter a valid search parameter";
  });
}

const searchButton = document.getElementById("search-button");
searchButton.addEventListener("click", searchMovies);

const filterButton = document.getElementById("filter-button");
filterButton.addEventListener("click", buildDropdown);

