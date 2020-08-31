import React, { useState } from 'react'
import shuffle from 'lodash.shuffle'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext

function GameProvider({ children }) {
    
    let [cargar, setCargar] = useState("Start")
    let [modo, setModo] = useState()
    let [tipoPieza, setTipoPieza] = useState(6)
    let [juego, setJuego] = useState({})
    let [jugadores, setJugadores] = useState({})

    function seleccionaModo(click) {
        setModo(click)
        setCargar("Chips")
    }

    function seleccionaPiezas(click) {
        setTipoPieza(click)
        setCargar("Players")
    }

    function backToStart() {
        setCargar("Start")
    }
    
    function armaJuego(participantes){

        const miFichero = creaFichero(tipoPieza)

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

        return shuffle(elFichero)
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

    return (
        <Provider value={{
            cargar,
            modo,
            juego,
            jugadores,
            seleccionaModo,
            armaJuego,
            seleccionaPiezas,
            backToStart
            }}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }