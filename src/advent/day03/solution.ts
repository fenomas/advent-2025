export const answers = [
  ['16973', '168027167146027'], // real
  ['357', '3121910778619'], // test
]

//
//

export const part1 = (input = '') => {
  return part2(input, 2)
}

export const part2 = (input: string, k = 12) => {
  return input.split('\n').reduce((ct, line) => {
    const curr: string[] = []
    let canDrop = line.length - k
    line.split('').forEach((ch) => {
      while (canDrop > 0 && curr.length > 0 && curr[curr.length - 1] < ch) {
        curr.pop()
        canDrop--
      }
      curr.push(ch)
    })
    return ct + Number(curr.slice(0, k).join(''))
  }, 0)
}
