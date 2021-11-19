var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1] 
var result = a.reduce((total,number) => {
    return total + number
},0)

var mediumNumber = result / a.length
var maxNumber = Math.max.apply(Math, a)
var minNumber = Math.min.apply(Math, a)

console.log(mediumNumber,maxNumber,minNumber)