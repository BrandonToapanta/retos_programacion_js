// Dadas dos matrices ordenadas nums1y nums2de tamaño my nrespectivamente, 
// devuelve la mediana de las dos matrices ordenadas.

// La complejidad general del tiempo de ejecución debería ser O(log (m+n)).

var findMedianSortedArrays = function (nums1, nums2) {
    let numsTotal = []
    if (nums1.length == 0) {
        numsTotal = [...nums2]
    }
    if (nums2.length == 0) {
        numsTotal = [...nums1]
    } else {
        numsTotal = [...nums1, ...nums2]
        numsTotal = numsTotal.sort((a, b) => a - b)
    }

    if (numsTotal.length % 2 === 1) {
        return numsTotal[(numsTotal.length - 1) / 2]
    } else {
        let median = (numsTotal[(numsTotal.length / 2) - 1] + numsTotal[(numsTotal.length / 2)]) / 2

        return median
    }

};

console.log(findMedianSortedArrays([1, 3], [2])) //Resultado esperado: 2
console.log(findMedianSortedArrays([1, 2], [3, 4])) //Resultado esperado: 2.5