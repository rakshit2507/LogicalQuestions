 // ----------- Function to find the Common elements of array --------------------------------

    const commonElements = (arr1, arr2) =>{
         const array = [];
         for(const item of arr1){
            if(arr2.includes(item)){
                array.push(item)
            }
         }
         return array;
    }
    console.log(commonElements([1,2,3,6,7],[1,3,4,5,5,6,7]))