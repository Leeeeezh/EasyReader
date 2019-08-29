export function randomChoose(arr, num) {
  let result = []
  let choosedIndex = []
  while (result.length < num) {
    let ranNum = ran(arr.length - 1)
    if (choosedIndex.includes(ranNum)) {
      continue
    }
    result.push(arr[ranNum])
    choosedIndex.push(ranNum)
  }

  return result
}

function ran(max) {
  return ~~(Math.random() * max) + 1
}
