import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const LosJugadores = () => {

    const { COLORES } = useContext(GameContext)

    let colores = COLORES
    let elColor = colores[0]

    return (
        <div>
            {colores.map(c => {
                return <a className="btn btn-lg" style={{background: c, fontSize: "12px", font: "bold"}}>Pablo</a>
            })}
        </div>
    )
}