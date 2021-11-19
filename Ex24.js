var arrays =  [1,2,3,2,3,4,6,7]
var i = 0
var b = arrays.filter((arr) => {
    return (((arr == 2) || (arr % 2 != 0)) && (arr != 1))
})
console.log(b)