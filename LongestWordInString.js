// -----------------Find the longest word in string ---------------------

const longestWord = (str) =>{
    const splitStr = str.split(" ")
    let longestWord = ""
    
    for(const item of splitStr){
      if(item.length > longestWord.length){
        longestWord = item
      }
    }
    return longestWord;
}
console.log(longestWord("I am the besetestetetest coder"))