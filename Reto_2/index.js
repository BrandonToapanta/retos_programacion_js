/*
 * Crea una función que encuentre todos los triples pitagóricos
 * (ternas) menores o iguales a un número dado.
 * - Debes buscar información sobre qué es un triple pitagórico.
 * - La función únicamente recibe el número máximo que puede
 *   aparecer en el triple.
 * - Ejemplo: Los triples menores o iguales a 10 están
 *   formados por (3, 4, 5) y (6, 8, 10).
 */

function buscarTernas(numMax) {

    const ternas = []

    for (let i = 1; i <= numMax; i++) {

        for (let j = i; j <= numMax; j++) {

            const k = Math.sqrt((i * i) + (j * j))

            if (k <= numMax && k === Math.floor(k)) {

                ternas.push([i, j, k])

            }
        }
    }

    return ternas
}

const num = 10

if (num <= 4) {
    console.log("No se a encontrado resultados")
} else {
    const triplesPitagoricos = buscarTernas(num)

    triplesPitagoricos.forEach(terna => {
        console.log(terna.join(", "))
    });
}
