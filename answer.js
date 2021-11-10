function averagePair(array, target) {
  let start = 0
  let end = array.length - 1
  while (start < end) {
    let average = (array[start] + array[end] / 2)
    if (average === target) {
      return true
    } else if (average > target) {
      start--

    } else {
      end--

    }
  } 
  return false

 
} console.log(averagePair([2, 5, 7, 9, 12], 5))


