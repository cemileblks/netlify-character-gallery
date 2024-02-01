import React from "react";

function Character({name, img, birth, death, race, realm, spouse}) {

    return (
        <dic>
            <h2>{name}</h2>
            <img src={img} alt={name} />
            <ul>
            <li>Date of Birth: {birth}</li>
                <li>Date of Death: {death}</li>
                <li>Race: {race}</li>
                <li>Realm: {realm}</li>
                <li>Spouse: {spouse}</li>
            </ul>
        </dic>
    )
}

export default Character;