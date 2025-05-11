function consumoMedio(distancia, combustivel) {
    let consumo = distancia / combustivel
    return consumo
}

let resultado1 = consumoMedio(500, 35.0)
let resultado2 = consumoMedio(2254, 124.4)
let resultado3 = consumoMedio(4554, 464.6)

console.log(`${resultado1.toFixed(3)} km/l`)
console.log(`${resultado2.toFixed(3)} km/l`)
console.log(`${resultado3.toFixed(3)} km/l`)