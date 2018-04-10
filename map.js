const map = (array, callback, optionalThisObj) => {
  let mapCallback = callback;
  const mappedArray = [];

  // bind callback to object passed in as optional 'this' arg
  if (optionalThisObj) {
    mapCallback = callback.bind(optionalThisObj);
  }
  
  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      mappedArray[i] = mapCallback(array[i], i, array);
    }
  }

  return mappedArray;
}

module.exports = map;