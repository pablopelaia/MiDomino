import React from 'react'

export function FormularioJugadores() {
    return (
        <form>
            <div className="form-group">
                <label for="exampleInputEmail1">Jugador</label>
                <input type="text" className="form-control" id="player"/>
            </div>
            <button type="submit" className="btn btn-primary btn-sm">Nuevo jugador</button>
            <br/><br/>
            <button type="submit" className="btn btn-warning btn-lg"><strong>Jugar</strong></button>
        </form>
    )
}