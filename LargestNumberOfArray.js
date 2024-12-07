 // ------------- Find the largest number of array ----------

 const largestNum = (array) =>{
    let largest = null
    let othervalue = null
   for(const item of array){
      if(item > largest){
        othervalue = largest
        largest = item
      }
      else{
        othervalue = item
      }
   }
   return largest
}
console.log(largestNum([1,2,3,4,5,10,20,30]))