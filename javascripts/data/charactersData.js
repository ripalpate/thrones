import {setCharacters, charactersBuilder, getCharacterz} from '../components/characters.js';
function executeThisCodeAfterFileLoaded () {
    // console.log('request', this.responseText);
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder(getCharacterz());
    //  console.log('request', data.characters);
}
function executeThisCodeIfXhrFails () {
    console.log('broke');
}

const getCharacters = () => {
//  console.log('insideGetCharacters')
let myrequest = new XMLHttpRequest();
myrequest.addEventListener('load', executeThisCodeAfterFileLoaded);
myrequest.addEventListener('error', executeThisCodeIfXhrFails);
myrequest.open('GET', './db/characters.json');
myrequest.send();
}
export{getCharacters};