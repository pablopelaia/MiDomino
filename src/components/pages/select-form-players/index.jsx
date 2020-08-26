import React from 'react'

export function FormularioJugadores() {
    return (
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Jugador</label>
                <input type="text" class="form-control" id="player"/>
            </div>
            <button type="submit" class="btn btn-primary btn-sm">Nuevo jugador</button>
            <br/><br/><br/>
            <button type="submit" class="btn btn-warning btn-lg btn-block">Comenzar</button>
        </form>
    )
}
