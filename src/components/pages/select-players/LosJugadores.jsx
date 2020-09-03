import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const LosJugadores = () => {

    const { jugadores } = useContext(GameContext)
    console.log(jugadores)

    return (
        <frameElement>
            <h4>Lista de jugadores</h4>
            {jugadores.map(j => {
                return <a
                    key={j.nombre}
                    className="btn btn-lg"
                    style={{background: j.fondo, color: j.letras, fontSize: "12px"}}
                >
                    <strong>{j.nombre}</strong>
                </a>
            })}
        </frameElement>
    )
}