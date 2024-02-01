import React from "react";
import characterData from "../data/characterData.json"
import Character from "./Character";

// show all characeters in data 
function CharacterGallery() {
    return (
        <div>
            {characterData.map((character) => <Character
            key= {character.id}
            name = {character.name}
            img= {character.imgUrl}
            birth= {character.birth}
            death= {character.death}
            race={character.race}
            realm={character.realm}
            spouse={character.spouse}
             />)}
        </div>
    )
}

export default CharacterGallery;