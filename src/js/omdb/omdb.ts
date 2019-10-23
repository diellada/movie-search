

export const getMovies = async (searchVal:string): Promise<any> => {
  let url = `https://www.omdbapi.com/?s=${searchVal}&apikey=152b30dd`;
  const response = await fetch(url);
  return await response.json();
}