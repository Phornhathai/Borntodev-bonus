// input 5
// *********   i=0  9 (5-i)*2-1   n*2-1
// -*******-   i=1  7 
// --*****--   i=2  5
// ---***---   i=3  3
// ----*----   i=4  1
// ---***        3  3
// --*****       2  5
// -*******      1  7
// *********     0  9

function printDiamond(n) {
    //top part
  
    for (let i = 0; i < n; i++) {
        let str = ''
        for (let j = 0; j < i; j++) {
            str += ' '
        }
        let str1 = ''
        for (let k = 0; k < (n - i) * 2 - 1; k++) {
            str1 += '*'

        }
        console.log(str + str1);
    }
    //bottom part
    for (let i = n-2; i >= 0; i--) {
       let str = ''
       for (let j = 0; j < i; j++) {
        str += ' '
       }
        let str1 = ''
        for (let k = 0; k < (n - i) * 2 - 1; k++) {
            str1 += '*'

        }
        console.log(str + str1);
    }
}

printDiamond(3)

//typescript
//top 
// function printPyramid(number) {
//     for (let i = 0; i <= number; i++) {
//      let str = ' '.repeat(number - i);
//      let str1 = '*'.repeat(i * 2 - 1);
//      console.log(str + str1);
//     }
//  }
 
//  printPyramid(5);

//bottom
// function printPyramid(number) {
//     for (let i = number - 2; i >= 0; i--) {
//       let str = ' '.repeat(i);
//       let str1 = '*'.repeat((number - i) * 2 - 1);
//       console.log(str + str1);
//     }
//   }
  
//   printPyramid(5);
