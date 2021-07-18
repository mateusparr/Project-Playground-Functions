// Desafio 10
function techList(array, name) {
  array.sort();
  let objectList = [];

  if (array.length === 0) {
    return 'Vazio!';
  } for (let key in array) {
    objectList.push({ tech: array[key], name });
  }

  return objectList;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
