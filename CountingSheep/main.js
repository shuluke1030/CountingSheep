function countSheeps(arrayOfSheep) {
    let array1 = [true,  true,  true,  false,
        true,  true,  true,  true ,
        true,  false, true,  false,
        true,  false, false, true ,
        true,  true,  true,  true ,
        false, false, true,  true ];
    let num = 0
for( i = 0; i <= arrayOfSheep.length - 1; i++){


    if(arrayOfSheep[i] === true){
        num++
    }
    return num
}
   
}
   let result = countSheeps(17)
console.log(result)