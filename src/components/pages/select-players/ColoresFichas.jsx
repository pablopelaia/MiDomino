import React, { useContext } from 'react'
import { GameContext } from '../../context/GameContext'

export const ColoresFichas = () => {

    const { colores, selecionaColor } = useContext(GameContext)

    const hanndleClick = (e) => {
        selecionaColor(e.target.id, e.target.style.color)
    }

    return (
        <div>
            <br />
            <label for="colores" className="btn btn-info btn-sm">
                Click en un color
            </label>
            <div id="colore">
                {colores.map(c => {
                    return <a
                    key={c.fondo}
                    className="btn btn-lg"
                    onClick={hanndleClick}
                    style={{background: c.fondo, color: c.fuente, fontSize: "16px"}}
                    id={c.fondo}
                    />
                })}
            </div>
        </div>
    )
}