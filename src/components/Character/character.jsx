import React from 'react';
import './character.css'

export default function Character({ name, image, species, gender, nameOrigin}){
    return(
        <div className="container-charter">
            <img alt={name} src={image} />
            <h2>{name}</h2>
            <div className="container-detail-character">
                <span>Especie: {species}</span>
                <span>Genero: {gender}</span>
                <span>Origen: {nameOrigin}</span>
            </div>
        </div>
    );
}