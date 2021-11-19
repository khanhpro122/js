function count(num) {
    if(num > 0) {
        num += count(num -1)
    }
    return num
}
console.log(count(9))
