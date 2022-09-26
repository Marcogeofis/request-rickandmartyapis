
export default function getCharacter(){

    const apiRickMorty = `https://rickandmortyapi.com/api/character`;
    
    
    return fetch(apiRickMorty)
        .then(res => res.json())
        .then(response => {
        const data = response;
        const species = data.results.map(result => {
            const { name, species, gender, image, origin, id } = result;
            
            const nameOrigin = origin.name;


            return { name, species, gender, image, nameOrigin, id }

        }); 
        
        return species;
        
        })
}