// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

let invalidCards = [];

const validateCard = (array1) => {
    let lastDigit = array1.slice(-1)[0];
    //console.log(lastDigit);
    let tempArray = array1.slice(0, -1);
    let reversedArray = tempArray.reverse().map(x => parseInt(x));
    //console.log(reversedArray);

    let sum = reversedArray.reduce(
        (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val)),
        0
      );
      sum += lastDigit;
      let answer = sum % 10 === 0;
      if(answer == true){
      	//console.log(`This card is valid`);
        return true
      } else {
      	//console.log(`This card is invalid.`)
        return false
      }
};

const findInvalidCards = (array2) => {
    let invalidCards = [];
    array2.forEach(function (value, i){
        if(validateCard(value) === false){
            invalidCards.push(value);
        }
    })
};


function idInvalidCardCompanies(array3){
    let invalidCards = findInvalidCards(array3);
    let lengthOfCards = invalidCards.length;
    let i = lengthOfCards-1;
    let arrayOfCompaniesSorted = [];

    // arrays to hold each companies invalid cards (if any)
    // amex starts 3
    let amex = [];
    // visa starts 4
    let visa = [];
    // mastercard starts 5
    let mastercard = [];
    // discover starts 6
    let discover = [];

    do {
        switch(invalidCards[i][0]){
            case(3):
            amex.push(invalidCards[i])
            break;

            case(4):
            visa.push(invalidCards[i])
            break;

            case(5):
            mastercard.push(invalidCards[i])
            break;

            case(6):
            discover.push(invalidCards[i])
            break;
        }
        i--;          
    } while (i >= 0);
    
    // return the card companies in one nested array
    arrayOfCompaniesSorted.push(amex);
    arrayOfCompaniesSorted.push(visa);
    arrayOfCompaniesSorted.push(mastercard);
    arrayOfCompaniesSorted.push(discover);

    return arrayOfCompaniesSorted
};
  findInvalidCards(batch);
  console.log(idInvalidCardCompanies(invalidCards));
 
