/*************************************
 * Challenge 1: engineer(array)
 *
 * - Accepts an array
 * - Logs every element of the array with "eng" next to it
 * eg: engineer(["zainab","omar","zahraa"]) => eng.zainab, eng.omar, eng.zahraa
 ************************************/
const engineer = (array) => {
  // input code here
  array.forEach((e) => console.log (`eng.${e}`);
};
 engineer ["Fatimah"]
/*************************************
 * Challenge 2: toKWD(wallets)
 *
 * - Write a function named toKWD
 * - Accepts an array of wallets
 *   in USD
 * - Returns an array of wallets
 *   in KWD
 *
 * The conversion is:
 *   kwd = usd * 0.30
 ************************************/
function toKWD (wallets){
  return wallets.map(wallet => wallet *0.3)
}
const KWDArray = toKWD ([10, 15,25])
console.log (toKWD ({99, 124, 150}))
/**************************************
 * Challenge 3: richestWallet(wallets,maxAmount)
 *
 * - Write a function named richestWallet
 * - Accepts an array of wallets
 * - Accepts a max amount
 * - Returns an array of wallets
 *   that exceed the maxAmount
 ***************************************/
const richestWallet (wallets, maxAmount) => wallets.filter (w => w > maxAmount)

console.log (richestWallet([90,400,150], 200))
/******************************************
 * Challenge 4: makeLiteralGrades(grades)
 *
 * - Write a function named makeLiteralGrades
 * - Accepts an array of grades as numbers
 * - Converts evrey grade to its currosponding
 * literal grade in the following scale
 * 90-100 : A
 * 80-90  : B
 * 70-80  : C
 * 60-70  : D
 * < 60   : F
 * Example: makeLiteralGrades([90, 70, 40]) should return ["A", "C", "F"]
 *******************************************/

const literalGrade =(grade) => {
 if (grads >= 90 ) {
     return "A"
    } else if (grads >= 80) {
    return "B"
    } else if (grade >= 70) {
    return "C"
    } else if (grade >= 60) {
    return "D"
    } else if (grade < 60) {
    return "F"
    }
};
const makeLiteralGrades = (grades) => grades.map (literalGrade);

console.log (makeLiteralGrades ([50 , 88, 95]))