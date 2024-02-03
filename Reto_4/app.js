Dada una matriz de números enteros nums y un número entero target, devuelva índices de los dos números de manera que sumentarget.

Puede suponer que cada entrada tendría exactamente una solución y no puede utilizar el mismo elemento dos veces.

Puede devolver la respuesta en cualquier orden.



    Ejemplo 1:

Entrada: nums = [2, 7, 11, 15], destino = 9
Salida: [0, 1]
Explicación: Debido a que nums[0] + nums[1] == 9, devolvemos[0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j <= nums.length; j++) {
            let sum = nums[i] + nums[j]
            if (sum == target) {
                return [i, j]
            } else {
                continue
            }
        }
    }
};