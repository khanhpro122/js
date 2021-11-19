
let a = [1,2,3,4,5,6,7,8,9,9,9,8,7,6,5,4,3,2,1] 
let n = a.length;
function countNumber(a, n) {
    let max_count = 1, res = a[0];
    let curr_count = 1;
    for(let i = 0; i < n; i++) {
        if(a[i] == a[i + 1]) {
            curr_count++;
        }
        else
        {
            if (curr_count > max_count)
            {
                max_count = curr_count;
                res = a[i];
            }
            curr_count = 1;
        }
    }
    if (curr_count > max_count)
        {
            max_count = curr_count;
            res = arr[n];
        }
    return res;
}
console.log(countNumber(a,n))
