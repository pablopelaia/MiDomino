import React, { useContext } from 'react'
import { ColoresFichas } from './ColoresFichas'
import { LosJugadores } from './LosJugadores'
import { GameContext } from '../../context/GameContext'

export function FormularioJugadores() {

    const { jugadores, participante, creaJugador, selecionaNombre } = useContext(GameContext)
    let nombre = ""
    let id = 1
    
    const ingresaJugador = () => {
        nombre = document.getElementById('player').value
    }

    const agregaNombre = () => {
        if(nombre === "" || nombre.length>10) {
            alert("Debe ingresar nombre de jugador hasta 10 caracteres")
            return
        }
        selecionaNombre(nombre)
    }

    const cargarJugador = () => {
        console.log(participante)
        if(participante.nombre != "" & participante.suColor != []) {
            creaJugador(id)
            id ++
        }
        return
    }
    
    return (
        <frameElement>
            <input type="text" id="player" placeholder="Nombre jugador" onChange={ingresaJugador}/>
            <label type="submit" for="player" className="btn btn-dark btn-sm" onClick={agregaNombre}>
                Ingresar Nombre
            </label>
            <ColoresFichas />
            <button type="submit" className="btn btn-primary btn-sm" onClick={cargarJugador}>
                Cargar Jugador
            </button>
            {jugadores != null && <LosJugadores />}
            <button className="btn btn-warning">Volver</button>
            <button type="submit" className="btn btn-success btn-lg">Jugar</button>
        </frameElement>
    )
}