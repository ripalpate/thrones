import {setCharacters, charactersBuilder} from '../components/characters.js';
function executeThisCodeAfterFileLoaded () {
    // console.log('request', this.responseText);
    const data = JSON.parse(this.responseText);
    setCharacters(data.characters);
    charactersBuilder();
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