import { ILocation, initMap } from './maps/maps';
import { getOnePokemon } from './pokemon/pokemon';

const uluru: ILocation = {lat: -25.344, lng: 131.036};

initMap(uluru);

// SIMPLE GET USING THE POKEAPI
getOnePokemon(1).then((data) => {

    // HERE'S YOUR RESPONSE DATA FOR POKEMON!!
    console.log(data);

    // Here's an example of a map to get the data we want from the object. I knew we taught that for a reason...
    const abilities = data.abilities.map((ability) => {
        return ability.ability.name;
    })
    console.log(abilities);
});