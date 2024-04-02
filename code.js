
function fib(n) {
    if(n == 0){ return [0]; }
    return fibFunc([0,1], n, 2);
}

function fibFunc(arr, n, iter){
    if(n >= 2 && n >= iter){
        arr[iter] = arr[iter-1] + arr[iter-2];
        return fibFunc(arr, n, iter+1);
    } else { return arr; }
}

