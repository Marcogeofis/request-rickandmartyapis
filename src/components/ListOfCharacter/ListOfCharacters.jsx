import React, { useEffect } from 'react';
import { useState } from 'react';
import Character from '../Character/character';
import getCharacter from '../../services/getCharacter';
import './ListOfCharacter.css'

export default function ListOfCharacter(){

    const [stateOfCharacter, setStateOfCharacter ] = useState([])

    useEffect(() => {
      getCharacter().then(dataCharacter => setStateOfCharacter(dataCharacter))
    
    },[]);

    return ( 
        <div className="container-dataCharacter">
            {
                stateOfCharacter.map(({ id, image, gender, name, nameOrigin, species}) => 
                    <Character 
                        image={image}
                        key={id}
                        gender={gender}
                        name={name}
                        nameOrigin={nameOrigin}
                        species={species}
                    />
                )
            }       
        </div>
    )
}