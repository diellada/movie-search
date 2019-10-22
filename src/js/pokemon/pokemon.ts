// DISCLAIMER: typescript is definitely optional, only use if you'd really like to practice it! Interfaces are a lot of extra work for the size of a response object, so I cheated and used any...

// THIS IS YOUR REQUEST FUNCTION
export const getOnePokemon = async (id: number): Promise<any> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    return await response.json();
}
// This code uses the javascript fetch function, which is now a part of the language and the browser in the form of a Web API. See the docs here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// SEE main.ts for reponse


