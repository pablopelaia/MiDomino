import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const ColoresFichas = () => {

    const { COLORES } = useContext(GameContext)

    let colores = COLORES
    let elColor = colores[0]

    return (
        <div>
            {colores.map(c => {
                return <a className="btn btn-lg" style={{background: c, fontSize: "16px", font: "bold"}} />
            })}
        </div>
    )
}