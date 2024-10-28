const newArray=[1,5,6,[11,7,4,[84,3,7,[7,8,4]],[7,8,4]]]
const newArray2 =[1,5,6,[11,7,47,8,4]]
//  console.log(newArray.flat(3),newArray2.flat(1))

// flat array

function flatArray(array){
    let newArr = []
    function flatRecursion(arr){
        for (let item of arr){
            if(Array.isArray(item)){
             flatRecursion(item)   
            }else{
              newArr.push(item)  
            }
        }
    }    
    flatRecursion(array)
        
return newArr;

}
console.log(flatArray(newArray))