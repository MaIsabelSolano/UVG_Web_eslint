const MostrarLaberinto = ({
    laberinto, altura, ancho, turno,
}) => {
    const width = parseInt(ancho, 10) * 3 + 1
    const height = parseInt(altura, 10) * 2 + 1

    const Movimiento = () => {
        const mov = event.key.toLowerCase()

        if (mov === 'arrowright' || mov === 'd') {
            turno((maze) => {
                const lab = [...maze]
                const y = lab.findIndex((fila) => fila.indexOf('p') > -1)
                const x = lab[y].findIndex((columna) => columna === 'p')

                if (lab[y][x + 1] === '+' || lab[y][x + 1] === '|') {
                    // choque, no hacer nada
                } else if (lab[y][x + 1] === 'g') {
                    lab[y][x] === ' '
                    lab[y][x + 1] = 'p'
                    alert('Fin del juego')
                    turno(null)
                } else {
                    // moverse
                    lab[y][x] = ' '
                    lab[y][x + 1] = 'p'
                }
                return lab
            })
        } else if (mov === 'arrowleft' || mov === 'a') {
            turno((maze) => {
                const lab = [...maze]
                const y = lab.findIndex((fila) => fila.indexOf('p') > -1)
                const x = lab[y].findIndex((columna) => columna === 'p')

                if (lab[y][x - 1] === '+' || lab[y][x - 1] === '|') {
                    // choque, no hacer nada
                } else if (lab[y][x - 1] === 'g') {
                    lab[y][x] === ' '
                    lab[y][x - 1] = 'p'
                    alert('Fin del juego')
                    turno(null)
                } else {
                    // moverse
                    lab[y][x] = ' '
                    lab[y][x - 1] = 'p'
                }
                return lab
            })
        } else if (mov === 'arrowup' || mov === 'w') {
            turno((maze) => {
                const lab = [...maze]
                const y = lab.findIndex((fila) => fila.indexOf('p') > -1)
                const x = lab[y].findIndex((columna) => columna === 'p')

                if (lab[y - 1][x] === '+' || lab[y - 1][x] === '-') {
                    // choque, no hacer nada
                } else if (lab[y - 1][x] === 'g') {
                    lab[y][x] === ' '
                    lab[y - 1][x] = 'p'
                    alert('Fin del juego')
                    turno(null)
                } else {
                    // moverse
                    lab[y][x] = ' '
                    lab[y - 1][x] = 'p'
                }
                return lab
            })
        } else if (mov === 'arrowdown' || mov === 's') {
            turno((maze) => {
                const lab = [...maze]
                const y = lab.findIndex((fila) => fila.indexOf('p') > -1)
                const x = lab[y].findIndex((columna) => columna === 'p')

                if (lab[y + 1][x] === '+' || lab[y + 1][x] === '-') {
                    // choque, no hacer nada
                } else if (lab[y + 1][x] === 'g') {
                    lab[y][x] === ' '
                    lab[y + 1][x] = 'p'
                    alert('Fin del juego')
                    turno(null)
                } else {
                    // moverse
                    lab[y][x] = ' '
                    lab[y + 1][x] = 'p'
                }
                return lab
            })
        }
    }

    window.onkeydown = Movimiento

    return (
        <div id="gridLaberinto" data-column={width} data-row={height}>
            { laberinto.map((fila, llave1) => fila.map((parte, llave2) => {
                if (parte === '+' || parte === '|' || parte === '-') {
                    return <div key={(llave1 * 5 + llave2 + 2).toString()} className="pared">{parte}</div>
                } else if (parte === 'p') {
                    return <div key={(llave1 * 10 + llave2 + 13).toString()} className="jugador">{parte}</div>
                } else if (parte === 'g') {
                    return <div key={(llave1 * 50 + llave2 + 16).toString()} className="meta">{parte}</div>
                } else {
                    return <div key={(llave1 * 100 + llave2 + 3).toString()} className="i">{parte}</div>
                }
            }))}
        </div>
    )
}

export default MostrarLaberinto
