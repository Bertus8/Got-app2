const GotUrl = "https://api.got.show/api/show/"
const GotUrlCharacter = "https://api.got.show/api/show/characters/";
const GotUrlHouse = "https://api.got.show/api/show/houses/";

export const getHouses = () => {
 return fetch(GotUrl + "houses").then((res) => {
     if(res.ok) {
         return res.json();
     }else {
         return [];
     }
 });   
};

export const getCharacters = () => {
    return fetch(GotUrl + "characters").then((res) => {
        if(res.ok) {
            return res.json();
        }else {
            return [];
        }
    });   
};
export const getCharactersByName = (name) => {
    return fetch(`${GotUrlCharacter}${name}`).then((res) => {
        if(res.ok) {
            
            return res.json();
        }else {
            return [];
        }
    });   
};


export const getHouseByName = (name) =>{
    return fetch(`${GotUrlHouse}${name}`).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return [];
        }
    })
}