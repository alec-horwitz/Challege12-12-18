// CHUNK

function chunk(array, size) {
  let returnArray = []

  for (let i = 0; i < array.length; i += size) {
    returnArray.push(array.slice(i, i + size))
  }

  return returnArray
}

chunk([1,2,3,4,5,6,7,8,9], 4)
