// http://www.omdbapi.com/?i=tt3896198&apikey=152b30dd


export const getMovies = async (searchVal:string): Promise<any> => {
  let url = `http://www.omdbapi.com/?s=${searchVal}&apikey=152b30dd`;
  const response = await fetch(url);
  return await response.json();
}