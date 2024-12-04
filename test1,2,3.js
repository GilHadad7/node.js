//שאלה 1
const number = 123;
const a2 = Number(number % 2 === 0);
const a3 = Number(number % 3 === 0);
const a5 = Number(number % 5 === 0);

console.log(a2 + a3 + a5);

//2 שאלה
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;

  return true;
}

for (let i = 2; i < 237; i++) if (isPrime(i)) console.log(i);

//שאלה 3

const array = [0, 50, 0, 300, 1200, 7, 0, 10];

const zeroCount = array
  .join("") // ממיר את כל המספרים במערך למחרוזת אחת
  .split("") // מפרק את המחרוזת למערך של תווים בודדים
  .filter((char) => char === "0").length; // מסנן רק את הספרות '0' וסופר אותן

console.log(`Number of zeros in the array: ${zeroCount}`);
