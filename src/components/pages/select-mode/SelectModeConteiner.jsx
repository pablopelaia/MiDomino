import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'


export const SelectModeConteiner = () => {
    
    const { seleccionaModo } = useContext(GameContext) 

    const hanndleClick = (e) => {
        console.log(e.target.value)
        seleccionaModo(e.target.value)
    }
    
    return (
        <div className="fondo">
            <h2>Modalidad de juego</h2>
            <br/>
            <button className="btn btn-secondary btn-lg" value={"classic"} onClick={hanndleClick}>
                Clásico
            </button>
            <button className="btn btn-danger btn-lg" value={"mexican"} onClick={hanndleClick}>
                Mexicano
            </button>
            <br/>
        </div>
    )
}