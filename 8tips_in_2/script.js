//1. how can we swap values?
// [1, 2, 3, 4, 5] -> [5, 2, 3, 4, 1]

let array = [1, 2, 3, 4, 5];

//temp variable -> old way
let temp = array[0];
array[0] = array[4];
array[4] = temp;
console.log('old way swap array -> ',array)

//array destructuring -> 2nd way swaping 
[array[0], array[4]] = [array[4], array[0]]
console.log('swap array using array destucturing - ', array)

let a = 1;
let b = 2;
[a, b] = [b, a]
console.log({a,b})

//math -> 3rd way swapping
b = a + (a=b) - b;
console.log({a,b})

//2. how to copy things from clipboard
function copyToClipBoard(str){
   const element = document.createElement('textarea');
   element.value = str
   document.body.appendChild(element)
   element.select();
   document.execCommand('copy');
   document.body.removeChild(element);
}
function handleClick(){
    let text = document.querySelector('#text');
    copyToClipBoard(text.innerText);
}

//3. destructuring aliases
// const language = {name: 'javascript', foundedd: '1995', founder: 'Brendan Eich'}

const language = {
    name: 'Javascript',
    founded: 1995,
    founder: "Brendan Eich"
};

const {name: languageName, founder: languageFounder} = language;
console.log({languageName, languageFounder})



//4 Get value as data type
//<input id='number' values='123' type='number' />
const element = document.querySelector('#num').valueAsNumber;
console.log(typeof(element))


//5. Remove duplicate from array
// [1, 2, 2, 3, 1, 4, 5, 5] -> [1, 2, 3]

const array1 = [1, 2, 2, 2, 3, 5, 6, 5];

const uniqueElementArray = [...new Set(array1)]
console.log(array1)
console.log(uniqueElementArray)


//6. Compare two arrays by value
// compare([1,3], [1,5]) -> false

const hasSameElements = (a, b) =>{
    return a.length === b.length && a.every( (v,i) => v === b[i])
}

console.log(hasSameElements([1,2], [1,2]))

//7. Shuffling an array
// [1, 2, 3, 4, 5] -> [2, 1, 4, 3, 5]

const numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers.sort(() => Math.random() - .5))

//8. using comma operator
// x = (2, 3) -> what is the output of x here

let x = 1;
x = (x++, x)
console.log(x) //2

let y = (2,3)
console.log(y) //3

let c = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]]

for(let i=0, j=3; i<= 3; i++, j--){
    console.log("c[" + i + "][" + j + "] = " + c[i][j])
}

