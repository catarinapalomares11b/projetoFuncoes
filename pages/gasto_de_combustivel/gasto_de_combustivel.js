function litrosNecessarios(tempo, velocidade) {
    let distancia = tempo * velocidade
    let consumo = distancia / 12
    return consumo
}

let resultado1 = litrosNecessarios(10, 85)
let resultado2 = litrosNecessarios(2, 92)
let resultado3 = litrosNecessarios(22, 67)

console.log(`${resultado1.toFixed(3)}`)
console.log(`${resultado2.toFixed(3)}`)
console.log(`${resultado3.toFixed(3)}`)