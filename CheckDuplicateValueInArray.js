const newArray=[1,5,1,4,6,8,1,5,8,9,5]
// const newArray = ["raj","rajesh","Amit","karan","Rajeev"]
const checkDublicate = (array) =>{
    const check = new Set()
    for(let i = 0; i < array.length; i++){
        if(check.has(array[i])){
            return true
        }
       check.add(array[i])
    }
    return false
}
console.log(checkDublicate(newArray))