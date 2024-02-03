/*
 * Crea una función que encuentre todas las combinaciones de los números
 * de una lista que suman el valor objetivo.
 * - La función recibirá una lista de números enteros positivos
 *   y un valor objetivo.
 * - Para obtener las combinaciones sólo se puede usar
 *   una vez cada elemento de la lista (pero pueden existir
 *   elementos repetidos en ella).
 * - Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6
 *   Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)
 *   (Si no existen combinaciones, retornar una lista vacía)
 */

function sumaNums(lista, num) {
    let solution = []
    lista.sort(function (a, b) { return a - b })
    function combination(star, target, comb) {
        if (target === 0) {
            console.log(comb)
            solution.push(Array.from(comb))
            return
        }
        if (num < 0 || star === lista.length) {
            return
        }
        for (let index = star; index <= lista.length; index++) {
            if (lista[index] == lista[index - 1] && index > star) {
                continue
            }
            comb.push(lista[index])
            combination(index + 1, target - lista[index], comb)
            comb.pop()
        }
    }
    combination(0, num, [])
    return solution
}
console.log(sumaNums([1, 5, 3, 2], 6))