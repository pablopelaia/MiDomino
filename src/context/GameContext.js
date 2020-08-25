import Reacct, { useState } from 'react'
import mezclar from 'lodash.shuffle'

let GameContext = Reacct.createContext()

function GameProvider({ children }) {
    let [juego, setJuego] = useState({})

    function armaJuego(modo, piezas, participantes){
        const miFichero = creaFichero(piezas + 1)
        const misJugadores = creaJugadores(participantes)
        const miMesa = creaMesa(modo, misJugadores)
        juego = {
            analizando: false,
            fichero: miFichero,
            ganador: "",
            jugadores: misJugadores,
            Mesa: miMesa,
            modalidad: modo,
            turno: 1,            
        }
    }

    function creaFichero(piezas) {
        let ficha = {}
        let elFichero = []

        for (let primero = 0; primero < piezas; primero++) {
            
            for (let segundo = primero; segundo < piezas; segundo++) {
                
                let puntos = primero + segundo
                
                if(puntos === 0) {
                    puntos = 50
                }

                ficha = {
                    caraFicha: [primero, segundo],
                    invertida: false,
                    pertenece: 0,
                    puntaje: puntos
                }
                elFichero.push(ficha)
            }
        }

        return mezclar(elFichero)
    }
}