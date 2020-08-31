import React, { useContext } from 'react'
import { GameContext } from '../../../context/GameContext'

export function SeleccionarCantidadDeFichas() {

    const { seleccionaPiezas, backToStart } = useContext(GameContext)

    const hanndleSelecct = (e) => {
        console.log(e.target.value)
        seleccionaPiezas(e.target.value)
    }

    return (
        <div className="fondo" data-toggle="buttons">
            <h2>Seleccione piezas</h2>
            <br/>
            <button className="btn btn-info btn-lg" value={6} onClick={hanndleSelecct}>Seis</button>
            <button className="btn btn-info btn-lg" value={9} onClick={hanndleSelecct}>Nueve</button>
            <button className="btn btn-info btn-lg" value={12}onClick={hanndleSelecct}>Doce</button>
            <div>
                <button className="btn btn-warning btn-lg" onClick={backToStart}>Volver</button>
            </div>
        </div>
    )
}