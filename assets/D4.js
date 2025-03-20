/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
  return l1 * l2;
}
console.log(area(10, 12));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
  const sum = num1 + num2;
  if (num1 === num2) {
    return sum * 3;
  } else {
    return sum;
  }
}
console.log(crazySum(20, 30)); // output 50
// console.log(crazySum(20, 20)); // output 120

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num1) {
  const absDiff = Math.abs(num1 - 19);
  if (num1 > 19) {
    return absDiff * 3;
  } else {
    return absDiff;
  }
}
console.log(crazyDiff(20)); // output 3 ==> 20-19=1   1*3=3
// console.log(crazyDiff(10)); // output 9

// Math.abs ==. The result is always a positive number or 0.

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(200));

/* semplificato senza usare if:
return ((n >= 20 && n <= 100) || n === 400) */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(name) {
  if (name.startsWith(`EPICODE`)) {
    //  if (name.toUpperCase().startsWith(`EPICODE`)) {  to transform it to upper case to find it both lower/uppercases
    return name;
  } else {
    return `EPICODE ` + name;
  }
}
console.log(epify(`Ivan`));
// console.log(epify(`EPICODE Ivan`));

// .StartsWith

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    // simplified: return (num % 3 === 0 || num % 7 === 0)
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
  const arrOfChar = str.split("");
  const lettersReversed = arrOfChar.reverse();

  const arrToStr = lettersReversed.join("");
  return arrToStr;
  // return str.split("").reverse().join("")     // simplified
}
console.log(reverseString("EPICODE"));

/* function reverseString(str) {                 // creating an empty array and pushing the characters inside
const reversedChar = [];

for (let i = str.length -1; i >= 0; i--);
reversedChar.push(str[i]);
}

const arrToStr = reversedChar.join("");
return arrToStr;
}

console.log(reverseString("EPICODE"));

*/
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//split + for

function upperFirst(str) {
  const words = str.split(" ");
  const arrOfNewWords = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstChar = word.charAt(0);
    const firstCharUpperCase = firstChar.toUpperCase();
    const remainingLetters = word.slice(1);
    const wordCatitalized = firstCharUpperCase + remainingLetters;
    arrOfNewWords.push(wordCatitalized);
  }

  return arrOfNewWords.join(" ");
}

console.log(upperFirst("Today is a beautiful day"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  const newStr = str.slice(1, -1);
  return newStr;
}

console.log(cutString(`Hello World`));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const arrOfNums = [];
  for (let i = 0; i < n; i++) {
    arrOfNums.push(Math.floor(Math.random() * 11));
  }
  return arrOfNums;
}

console.log(giveMeRandom(3));
