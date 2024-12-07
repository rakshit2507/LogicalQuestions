 //------ Remove Duplicate Elements of array using reduce -----------

 const removeDuplicateEle = (array) =>{
    return  array.reduce((acc, curr)=>{
        if(!acc.some(item => item === curr)){
            acc.push(curr)
        }
        return acc
    },[])
}
console.log(removeDuplicateEle([1,2,3,4,4,4,5,6,6,7]))



 //------ Remove Duplicate Elements of array using loop -----------

 const removeDuplicateEleByloop = (array) =>{
    const arr = []
    for(const item of array){
     if(!arr.includes(item)){
         arr.push(item)
     }
    }
    return arr
 }
 console.log(removeDuplicateEleByloop([1,4,4,5,6,6,7]))