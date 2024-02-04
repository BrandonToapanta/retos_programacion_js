// Se le proporcionan dos listas enlazadas no vacías 
// que representan dos números enteros no negativos. 
// Los dígitos se almacenan en orden inverso , y cada 
// uno de sus nodos contiene un único dígito. Suma los 
// dos números y devuelve la suma como una lista vinculada.

// Puedes asumir que los dos números no contienen ningún 
// cero a la izquierda, excepto el propio número 0.

//Mi solucion
var addTwoNumbers = function (l1, l2) {
    const lista1 = l1.reverse()
    const lista2 = l2.reverse()
    let sum1 = lista1.reduce((total, numero) => (total * 10) + numero, 0)
    let sum2 = lista2.reduce((total, numero) => (total * 10) + numero, 0)
    sumTotal = (sum1 + sum2).toString()
    let caracteres = sumTotal.split('').map(Number)
    return caracteres.reverse()
}

const resultado = addTwoNumbers([2, 4, 3], [5, 6, 4])
console.log(resultado)  // Resultado esperado: [8, 0, 7]

const resultado1 = addTwoNumbers([0], [0])
console.log(resultado1)  // Resultado esperado: [0]

const resultado2 = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])
console.log(resultado2)  // Resultado esperado: [8,9,9,9,0,0,0,1]

//Solucion externa

var addTwoNumbers = function (l1, l2) {
    const iter = (n1, n2, rest = 0) => {
        if (!n1 && !n2 && !rest) return null;
        const newVal = (n1?.val || 0) + (n2?.val || 0) + rest;
        const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10));
        return new ListNode(newVal % 10, nextNode);
    }
    return iter(l1, l2);
};