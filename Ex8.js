var n = 13877;
var flag = true;
for(var i = 0; i <= n; i++) {
    if(i % 2 == 0) {
        flag = false;
    }
    else{
        flag = true
    }
}
if(flag === true) {
    console.log("YES")
}
else {
    console.log("NO")
}