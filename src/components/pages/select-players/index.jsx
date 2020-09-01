import React from 'react'
import { ColoresFichas } from './ColoresFichas'
import { LosJugadores } from './LosJugadores'

export function FormularioJugadores() {

    return (
        <form>
            <div className="form-group">
                <h3 for="exampleInputEmail1">Jugador</h3>
                <input type="text" className="form-control" id="player" placeholder="Nombre jugador"/>
                <ColoresFichas />
                <button type="submit" className="btn btn-primary">Agrega Jugador</button>
            </div>
            <h4>Lista de jugadores</h4>
            <LosJugadores />
            <button className="btn btn-warning">Volver</button>
            <button type="submit" className="btn btn-success btn-lg">Jugar</button>
        </form>
    )
}