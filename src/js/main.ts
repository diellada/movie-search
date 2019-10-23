import { getMovies } from './omdb/omdb';

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

const dropDownListener = (movies, yearArray) => {
  const yearDropdown = document.getElementById("dropdown-list");  
  yearDropdown.onchange = () => {
    const selectedYear = (<HTMLSelectElement>yearDropdown).options[(<HTMLSelectElement>yearDropdown).selectedIndex].value;
    console.log(selectedYear);
    buildList(movies, yearArray, selectedYear);
  }
}

const buildDropdown = (yearArray) => {
  yearArray.sort(function(a, b){return a-b});
  const yearDropdown = document.getElementById("dropdown-list");
  $("#dropdown-list").empty();
  yearDropdown.style.display = "block";
  yearArray.forEach(year => {
    let listElement = document.createElement("option");
    listElement.classList.add("year-element");
    yearDropdown.append(listElement);
    listElement.innerText = year;
  })
}

const buildList = (movies, yearArray, yearSelected) => {
  dropDownListener(movies, yearArray);

  const cardContainer = document.getElementById("movie-container");
  updateMovies(cardContainer);

  let filteredMovies = yearSelected ?  filterMovies(movies, yearSelected) : movies;
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
  let yearArray = [];
  let yearSelected;

  getMovies(searchBar.value).then((data) => {
    let movieArray: string[] = data.Search;
    buildList(movieArray, yearArray, yearSelected);
    buildDropdown(yearArray);
  })
  .catch((error) => {
    console.log(error);
    const cardContainer = document.getElementById("movie-container");
    cardContainer.innerText = "Please enter a valid search parameter";
  });
}

const input = document.getElementById("search-bar");
input.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    searchMovies();
  }
})
// const searchButton = document.getElementById("search-button");
// searchButton.addEventListener("click", searchMovies);
