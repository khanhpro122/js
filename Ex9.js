var n = 12321
var temp = n;
var reverse = 0
while(temp > 0)
{
    rem = temp % 10;
    var reverse = reverse * 10 + rem;
    temp /= 10;
} 
if(reverse == n) {
    console.log("YES")
}else {
    console.log("NO")
}

