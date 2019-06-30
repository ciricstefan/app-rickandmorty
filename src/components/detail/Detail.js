import React from "react"
import './Detail.css'
import moment from 'moment'

const Detail = ( { character, handleClick } ) => {

    return (
        <div className='detail' onClick={handleClick}>
            <div>
                <p>Name: </p>
                <p>{character.name ? character.name : "Unknown"}</p>
            </div>
            <div>
                <p>Status: </p>
                <p>{character.status ? character.status : "Unknown"}</p>
            </div>
            <div>
                <p>Species: </p>
                <p>{character.species ? character.species : "Unknown"}</p>
            </div>
            <div>
                <p>Type: </p>
                <p>{character.type ? character.type : "Unknown"}</p>
            </div>
            <div>
                <p>Gender: </p>
                <p>{character.gender ? character.gender : "Unknown"}</p>
            </div>
            <div>
                <p>Origin: </p>
                <p>{character.origin.name ? character.origin.name : "Unknown"}</p>
            </div>
            <div>
                <p>Location: </p>
                <p>{character.location.name ? character.location.name : "Unknown"}</p>
            </div>
            <div>
                <p>Created: </p>
                <p>{character.created ? moment(character.created).format("MMM Do YY") : "Unknown"}</p>
            </div>
        </div>
    )
}

export default Detail