// CHUNK without slice

function chunk(array, size) {
  let result = []
  let chunk = []

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i])
    if (chunk.length === size || i === array.length - 1) {
      result.push(chunk)
      chunk = []
    }
  }
  return result
}

chunk([1,2,3,4,5,6,7,8,9], 4)
