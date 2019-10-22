// http://www.omdbapi.com/?i=tt3896198&apikey=152b30dd


export const getMovies = async (searchVal:string) => {
  let url = `http://www.omdbapi.com/?s=${searchVal}&plot=short&apikey=152b30dd`;
  const response = await fetch(url);
  return await response.json();
}