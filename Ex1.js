function checkNumber(n) {
    const flag = true;
    if(n < 2) {
        return flag =  false;
    }
    else if(n == 2) {
        return flag = true;
    }
    else if(n % 2 == 0) {
        return flag = false;
    }
    else {
        for (var i = 2; i < n-1; i+=2){
            if(n % i ==0){
                return flag = false;
            }
        }
    }
    if(flag === 'true') {
        console.log('YES');
    }
    else {
        console.log('NO');
    }
};