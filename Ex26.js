var arr = [1,2,3,4,6,7]
var k = 5

var closest = arr.reduce((pre,cur) => {
    return (Math.abs(cur - k) < Math.abs(pre - k) ? cur : pre)
})
console.log(closest)