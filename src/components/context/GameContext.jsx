import React, { useState } from 'react'
import shuffle from 'lodash.shuffle'

let GameContext = React.createContext()
let { Provider, Consumer } = GameContext

function GameProvider({ children }) {
    
    const MIS_COLORES = [ {fondo: "#ff0000", fuente: "white"}, {fondo: "#0000ff", fuente: "white"},
        {fondo: "#008000", fuente: "white"}, {fondo: "#64b4d2", fuente: "Black"}, {fondo: "#ffff00", fuente: "Black"},
        {fondo: "#ff4500", fuente: "white"}, {fondo: "#646464", fuente: "white"}, {fondo: "#800080", fuente: "white"}
    ]
    
    let [cargar, setCargar] = useState("Players")
    let [modo, setModo] = useState({})
    let [juego, setJuego] = useState({})
    let [jugadores, setJugadores] = useState()
    let [colores, setColores] = useState(MIS_COLORES)
    let [participante, setParticipante] = useState({nombre:"", fondo: "", letras: ""})

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
    
    function selecionaColor(fondo, fuente){
        
        const player = {
            ...participante,
            fondo: fondo,
            letras: fuente
        }

        setParticipante(player)
    }

    function selecionaNombre(nombre){
        const player = {
            ...participante,
            nombre
        }

        setParticipante(player)
    }

    function creaJugador(id) {
        
        let comienza = false

        actualizaColores()

        if(id === 0){
                comienza = true
        }

        const jugador = {
                id: id,
                fondo: participante.fondo,
                letras: participante.letras,
                iniciaTurno: comienza,
                nombre: participante.nombre,
                puntaje: 0,
                susFichas: [],
                suTren: []
        }
        
        const agregaJugador = [...jugadores, jugador]

        setJugadores(agregaJugador)
    }

    function vuelvePagina(){
        setParticipante()
        setColores(MIS_COLORES)
        setJugadores()
        setCargar("Chips")
    }

    function actualizaColores() {
        const alcualesColores = colores.filter(c => c.fondo != participante.fondo)
        setColores(alcualesColores)
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
            colores,
            juego,
            jugadores,
            modo,
            participante,
            backToStart,
            creaJugador,
            selecionaColor,
            seleccionaModo,
            selecionaNombre,
            seleccionaPiezas,
            vuelvePagina
            }}>
            {children}
        </Provider>
    )
}

export { GameProvider, Consumer as GameConsumer, GameContext }