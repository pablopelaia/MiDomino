import React from 'react'
import './Styles.css'
import { SeleccionarModo } from '../select-mode'
import { SeleccionarCantidadDeFichas } from '../select-amount-of-chips'
import { FormularioJugadores } from '../select-form-players'

export function StartPages() {
    return (
        <div className="fondo">
            <br/>
            <header className="bg-success">
                <h1>D O M I N Ó</h1>
            </header>
            <br/><br/>
            <SeleccionarModo />
            <br/>
            <SeleccionarCantidadDeFichas />
            <br/>
            <FormularioJugadores />
        </div>
    )
}
