let volume = (raio) => {
    let pi = 3.14159
    let resultado = (4 / 3) * pi * Math.pow(raio, 3)
    return resultado
}

let formatarVolume = (raio) => {
    let vol = volume(raio)
    return `VOLUME = ${vol.toFixed(3)}`
}

let esfera1 = formatarVolume(3)
let esfera2 = formatarVolume(15)
let esfera3 = formatarVolume(1523)

console.log(esfera1)
console.log(esfera2)
console.log(esfera3)