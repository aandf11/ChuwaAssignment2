const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// const cloneItems = [...itemsObject];
// console.log(cloneItems);

/*#1: Given the array, implement a function for generating a new array which doubles the
quantity and price in each object.*/

function doubleValue(arr) {
  const newItems = arr.map((arr) => ({
    ...arr,
    quantity: arr.quantity * 2,
    price: arr.price * 2,
  }));
  console.log(newItems);
}
console.log("#1 Output: ");
doubleValue(itemsObject);

/*#2: Given the array, implement a function for generating a new array which contains item
quantity > 2 and price > 300 only.*/
function selectedArray(arr) {
  newArray = [];
  var result = arr.map(function (el) {
    if (el.price > 300 && el.quantity > 2) {
      newArray.push({ quantity: el.quantity, price: el.price });
    }
  });
  console.log(newArray);
}
console.log("#2 Output: ");
selectedArray(itemsObject);

//#3: Given the array, implement a function to calculate the total value of the items.

function totalValue(arr) {
  var totalValue = 0;
  var mutiple = 0;
  var value = 0;
  arr.forEach(function (item) {
    Object.keys(item).forEach(function (key) {
      // console.log("key:" + key + " value: " + item[key]);
      if (key == "price") {
        mutiple = item[key];
      }
      if (key == "quantity") {
        value = item[key];
      }
      if (mutiple != 0 && value != 0) {
        totalValue += mutiple * value;
        mutiple = 0;
        value = 0;
      }
    });
  });
  console.log("The total value of the items is : " + totalValue);
}

console.log("#3 Output: ");
totalValue(itemsObject);

const string =
  " Perhaps The Easiest-to-understand Case For Reduce Is To Return The Sum Of All The Elements In An Array ";

/*#4: Given the string, implement a function to remove all the non-alphabet characters and
extra space in the string and convert the string to all lowercase.*/

function removeSpecialCharacter(s) {
  for (let i = 0; i < s.length; i++) {
    // Finding the character whose ASCII value fall under this range
    if (s[i] < "A" || (s[i] > "Z" && s[i] < "a") || s[i] > "z") {
      // erase function to erase the character
      s = s.substring(0, i) + s.substring(i + 1);
      i--;
    }
  }
  console.log(s.toLowerCase());
}

console.log("#4 Output: ");
removeSpecialCharacter(string);