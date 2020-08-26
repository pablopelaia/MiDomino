import Reacct, { useState } from 'react'
import mezclar from 'lodash.shuffle'

let GameContext = Reacct.createContext()

function GameProvider({ children }) {
    
    let [juego, setJuego] = useState({})
    let [jugadores, setJugadores] = useState({})

    function armaJuego(modo, piezas, participantes){

        const miFichero = creaFichero(piezas + 1)

        juego = {
            analizando: false,
            fichero: miFichero,
            ganador: "",
            leTocaJugar: 0,
            modalidad: modo,
            pozo: [],
            tren: [],
            turno: 1           
        }
        
        setJugadores(creaJugadores(participantes))
        setJuego(juego)
        repartirFichas()
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
                    pertenece: 10,
                    puntaje: puntos
                }
                elFichero.push(ficha)
            }
        }

        return mezclar(elFichero)
    }

    function creaJugadores(participantes) {
        
        let losJugadores = []
        let jugador
        let comienza = false

        for (let index = 0; index < participantes.length; index++) {
            
            if(index === 0){
                comienza = true
            }

            jugador = {
                id: index,
                color: participantes[index].color,
                iniciaTurno: comienza,
                nombre: participantes[index].name,
                puntaje: 0,
                susFichas: [],
                suTren: []
            }
            
            losJugadores.push(jugador)
        }
        
        return losJugadores
    }

    function repartirFichas(){

        let actualJugadores = []
        let lasFichas = juego.fichero
        let fichasJugador = []
        let actualJugador

        jugadores.map(elJugador => {
                    
            fichasJugador = lasFichas.splice(0,7)
            
            actualJugador = {
                ...elJugador,
                susFichas: fichasJugador
            }
            actualJugadores.push(actualJugador)
        })

        const actualJuego = {
            ...juego,
            pozo: lasFichas
        }

        setJuego(actualJuego)
        setJugadores(actualJugadores)
    }
}