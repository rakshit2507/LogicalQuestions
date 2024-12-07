// ----------------- Find the missing number from the sequence -------------

const missingNumber = (array, n) =>{
    const total = (n * (n + 1))/2
    const totalArrSum = array.reduce((acc, curr) => acc + curr, 0)

    console.log(total,totalArrSum)
    return total - totalArrSum;
}
const arr = [1,2,3,4,6]
console.log(missingNumber(arr, arr.length + 1))