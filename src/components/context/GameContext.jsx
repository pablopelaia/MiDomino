import React, { useState } from 'react'
import shuffle from 'lodash.shuffle'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext

function GameProvider({ children }) {
    
    let [cargar, setCargar] = useState("Players")
    let [modo, setModo] = useState({})
    let [juego, setJuego] = useState({})
    let [jugadores, setJugadores] = useState({})
    const COLORES = ["#ff0000", "#0000ff", "#008000", "#64b4d2", "#ffff00", "#ff4500", "#646464", "#800080"]

    function seleccionaModo(click) {
        let elModo = {
            tipoJuego: click,
            tipoPieza: 0
        }
        setModo(elModo)
        setCargar("Chips")
    }

    function seleccionaPiezas(click) {
        let elModo = {
            ...modo,
            tipoPieza: click
        }
        setModo(elModo)
        setCargar("Players")
    }

    function backToStart() {
        setCargar("Start")
    }
    
    function creaJugador(id, nombre, color) {
        
        let comienza = false

        if(id === 0){
                comienza = true
        }

        const jugador = {
                id,
                color,
                iniciaTurno: comienza,
                nombre,
                puntaje: 0,
                susFichas: [],
                suTren: []
        }
        
        const agregaJugador = [...jugadores, jugador]

        setJugadores(agregaJugador)
    }

    function armaJuego(){

        const elJuego = {
            analizando: false,
            ganador: "",
            leTocaJugar: 0,
            pozo: [],
            tren: [],
            turno: 1
        }
        
        setJuego(elJuego)
        repartirFichas()
    }

    function repartirFichas(){

        const miFichero = creaFichero()
        let actualJugadores = []
        let fichasJugador = []
        let actualJugador

        jugadores.map(elJugador => {
                    
            fichasJugador = miFichero.splice(0,7)

            fichasJugador = fichasJugador.map(f => {
                return {...f, pertenece: elJugador.nombre}
            })
            
            actualJugador = {
                ...elJugador,
                susFichas: fichasJugador
            }
            actualJugadores.push(actualJugador)
        })

        const actualJuego = {
            ...juego,
            pozo: miFichero
        }

        setJuego(actualJuego)
        setJugadores(actualJugadores)
    }

    function creaFichero() {
        
        let ficha = {}
        let elFichero = []
        let doble = false
        let puntos
        const piezas = modo.tipoPieza + 1

        for (let primero = 0; primero < piezas; primero++) {
            
            for (let segundo = primero; segundo < piezas; segundo++) {
                
                puntos = primero + segundo
                
                if(primero === segundo){
                    doble = true
                    if(primero === 0){
                        puntos = 50
                    }
                }

                ficha = {
                    caraFicha: [primero, segundo],
                    doble: doble,
                    invertida: false,
                    pertenece: "pozo",
                    puntaje: puntos
                }
                elFichero.push(ficha)
            }
        }

        return shuffle(elFichero)
    }

    

    return (
        <Provider value={{
            cargar,
            COLORES,
            juego,
            jugadores,
            modo,
            backToStart,
            seleccionaModo,
            seleccionaPiezas,            
            }}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }