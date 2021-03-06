import {printToDom} from "../helper/util.js";
import {detailsBuilder} from "./detail.js";

const characterClick = (e) => {
    const characterId = e.target.closest('.character-card').id;
    const currentCharacter = characters.find((x)=>{
        return x.id=== characterId;
    })
    detailsBuilder(currentCharacter);
    // console.log(currentCharacter);
}

const createEvents = () => {
    const characterCards = document.getElementsByClassName('character-card');
    for(let i = 0; i < characterCards.length; i++) {
        characterCards[i].addEventListener('click', characterClick);
    }
}



let characters = [
    // {id:"character1", name:"John Snow", house:"Stark", imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Jon_Snow-Kit_Harington.jpg/220px-Jon_Snow-Kit_Harington.jpg'},
    // {id:"character2", name: "Daenerys Targaryen", house:"Targaryen", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128"},
    // {id:"character3", name: "Cersei Lannister", house:"Lannister", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355"},
    // {id:"character4", name: "Sansa Stark", house:"Stark", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest?cb=20170828072803"}
];
const setCharacters = (newArray)=>{
    characters = newArray;
}

const getCharacterz =() => {
    return characters;
}

const sortPeople =(e)=>{
    const house = e.target.id;
    if(house==='All'){
        charactersBuilder(characters);
    } else {
    const filteredPeeps = characters.filter(x=>x.house === house);
    charactersBuilder(filteredPeeps);
    }
    // console.log('click sort');
} 

const sortEvents = () => {
    const allButton = document.getElementById('All');
    const starkButton = document.getElementById('Stark');
    allButton.addEventListener('click', sortPeople);
    starkButton.addEventListener('click', sortPeople);
}

const charactersBuilder = (charactersArray) => {
    let domString = '';
    charactersArray.forEach((character)=>{
        domString +=`<div class="col-2 character-card" id="${character.id}">`;
        domString +=`<div class="card">`;
        domString +=`<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=`<div class="card-body">`;
        domString +=`<h5 class="card-title">${character.name}</h5>`; 
        domString +=`</div>`;
        domString +=`</div>`;
        domString +=`</div>`;
      
    });
    printToDom(domString);
    createEvents();
}

export{charactersBuilder, setCharacters, getCharacterz, sortEvents};