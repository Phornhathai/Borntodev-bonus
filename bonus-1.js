// --*     2 1
// -***    1 3
// *****   0 5

function printPyramid(number) {
    
   for (let i = 1; i <= number; i++) {
    let str = ''
    for (let j = 0; j < number - i; j++) {
        str += ' '
    }
    for (let k = 0; k < i * 2 - 1; k++) {
        str += '*'  
    }
    console.log(str);
   }

    //typescript use .repeat
//    for (let i = 1; i <= number; i++){
//         let str = ' '.repeat(number - i)
//         let str1 = '*'.repeat(i*2-1)
//         console.log(str + str1);
//    }
  
}

printPyramid(5)