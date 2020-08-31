import React, { useContext } from 'react'
import { SeleccionarModo } from '../select-mode'
import { SeleccionarCantidadDeFichas } from '../select-amount-of-chips'
import { FormularioJugadores } from '../select-form-players'
import { GameContext } from '../../../context/GameContext'

export const StartConteiner = () => {

    const { cargar } = useContext(GameContext)
    
    switch(cargar){
        case "Start":
            return <SeleccionarModo />
        
        case "Chips":
            return <SeleccionarCantidadDeFichas />

        case "Players":
            return <FormularioJugadores />

        case "Game":
            return <SeleccionarModo />
    }
}
