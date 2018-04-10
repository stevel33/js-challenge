const resort = (u, o) => {
  const resorted = [];
  const indexObj = {};
  
  // based on sort criteria in o, store property in u and keep track of indexes
  // ex:
  // indexObj = {
  //   'name1': [0, 1]
  //   'name2': [2, 5]
  // }
  for (let i = 0; i < u.length; i++) {
    let key = u[i][o.sort];
    indexObj[key] = [];
  }
  
  for (let i = 0; i < u.length; i++) {
    let key = u[i][o.sort];
    if (indexObj.hasOwnProperty(key)) {
      indexObj[key].push(i)
    }
  }

  // iterate through order list in o and lookup the key in indexObj
  // push corresponding elements in array u into resorted
  for (let i = 0; i < o.order.length; i++) {
    const indexes = indexObj[o.order[i]];
    for (let j = 0; j < indexes.length; j++) {
      resorted.push(u[indexes[j]]);
    }
  }
  
  return resorted;
}

module.exports = resort;