
    // ---------- Find Second Largest Number -----------
const secondLargestNum = (num) =>{
    if(num.length < 1){
      return `Array must have 2 values`
    }

    let secondLargestValue = null;
    let largestValue = null;
    for(let item of num){
      if(item > largestValue){
          secondLargestValue = largestValue
          largestValue = item 
      }
      else if(num > secondLargestValue && num < largestValue){
            secondLargestValue = item
      }
    }
    return secondLargestValue;
  }

  console.log(secondLargestNum([1,2,3,5,10,20,30]))