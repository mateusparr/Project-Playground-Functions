// Desafio 1

function compareTrue(a, b) {
  if (a && b) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let newArray = string.split(' ');
  return newArray;
}

// Desafio 4
function concatName(array) {
  let firstString = array[0];
  let lastString = array[array.length - 1];
  let joinStrings = `${lastString}, ${firstString}`;
  return joinStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6

function highestCount(array) {
  let highestNumber = array[0];
  let highestTimes = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > highestNumber) {
      highestNumber = array[i];
    }
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highestNumber) {
      highestTimes += 1;
    }
  }
  return highestTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  } if (cat2Distance < cat1Distance) {
    return 'cat2';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numbersArray) {
  let getArray = [];
  for (let i = 0; i < numbersArray.length; i += 1) {
    if (numbersArray[i] % 3 === 0 && numbersArray[i] % 5 === 0) {
      getArray.push('fizzBuzz');
    } else if (numbersArray[i] % 3 === 0) {
      getArray.push('fizz');
    } else if (numbersArray[i] % 5 === 0) {
      getArray.push('buzz');
    } else {
      getArray.push('bug!');
    }
  }
  return getArray;
}

// Desafio 9
// eslint-disable-next-line complexity
function encode(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      newString += '1';
    } else if (string[i] === 'e') {
      newString += '2';
    } else if (string[i] === 'i') {
      newString += '3';
    } else if (string[i] === 'o') {
      newString += 4;
    } else if (string[i] === 'u') {
      newString += 5;
    } else {
      newString += string[i];
    }
  }
  return newString;
}

// eslint-disable-next-line complexity
function decode(decodeString) {
  let newDecodeString = '';
  for (let i = 0; i < decodeString.length; i += 1) {

    if (decodeString[i] === '1') {
      newDecodeString += 'a';
    } else if (decodeString[i] === '2') {
      newDecodeString += 'e';
    } else if (decodeString[i] === '3') {
      newDecodeString += 'i';
    } else if (decodeString[i] === '4') {
      newDecodeString += 'o';
    } else if (decodeString[i] === '5') {
      newDecodeString += 'u';
    } else {
      newDecodeString += decodeString[i];
    }
  }
  return newDecodeString;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
