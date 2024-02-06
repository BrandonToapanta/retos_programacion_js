var mergeTwoLists = function (list1, list2) {
    let lists = []
    lists = [...list1, ...list2]
    lists = lists.sort((a, b) => a - b)
    return lists
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])) // resultado esperado [1,1,2,3,4,4]
console.log(mergeTwoLists([], [])) // resultado esperado []
console.log(mergeTwoLists([], [0])) // resultado esperado [0]
