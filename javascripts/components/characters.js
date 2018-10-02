import {printToDom} from "../helper/util.js";

const characters = [
    {id:"character1", name:"John Snow", house:"Stark", imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Jon_Snow-Kit_Harington.jpg/220px-Jon_Snow-Kit_Harington.jpg'},
    {id:"character2", name: "Daenerys Targaryen", house:"Targaryen", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128"},
    {id:"character3", name: "Cersei Lannister", house:"Lannister", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest?cb=20170828071355"},
    {id:"character4", name: "Sansa Stark", house:"Stark", imageUrl:"https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest?cb=20170828072803"}
];

const charactersBuilder = () => {
    let domString = '';
    characters.forEach((character)=>{
        domString +=`<div class="col-2 character">`;
        domString +=`<div class="card">`;
        domString +=`<img class="card-img-top" src="${character.imageUrl}" alt="${character.name}">`;
        domString +=`<div class="card-body">`;
        domString +=`<h5 class="card-title">${character.name}</h5>`; 
        domString +=`</div>`;
        domString +=`</div>`;
        domString +=`</div>`;
      
    });
    printToDom(domString);
}

export{charactersBuilder};