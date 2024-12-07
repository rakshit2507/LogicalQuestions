// ---------------- Count how many elements are duplicating in array ------------

const countDuplicate = (array) =>{
    const newArr = new Set()
    const duplicate = new Set()
    console.log(newArr, duplicate)
    for(const item of array){
      if(newArr.has(item)){
        duplicate.add(item)
      }
      else{
        newArr.add(item)
      }
    }
   return duplicate.size
  }
  console.log(countDuplicate([1,2,3,3,4,5,6,6,7,7,8,9]))    