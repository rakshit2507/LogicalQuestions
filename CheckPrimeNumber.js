const checkPrimeNumber = (item) =>{
    if(item == 0 || item == 1){
        return false
    }
    for(let i = item - 1; i > 1; i--){
        // console.log(item[i])
        if(item % i === 0){
            return false
        }
    }
    return true;
}
console.log(checkPrimeNumber(7))