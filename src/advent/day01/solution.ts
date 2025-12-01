export const answers = [
  ['1034', '6166'], // real
  ['3', '6'], // test
]

//
//

export const part1 = (input = '') => {
  let num = 50
  return input.split('\n').reduce((ct, line) => {
    const sign = line[0] === 'R' ? 1 : -1
    const val = parseInt(line.slice(1), 10)
    num += sign * val
    if (num % 100 === 0) ct++
    return ct
  }, 0)
}

export const part2 = (input: string) => {
  const mod = (a = 0, b = 1) => ((a % b) + b) % b
  let num = 50
  return input.split('\n').reduce((ct, line) => {
    const sign = line[0] === 'R' ? 1 : -1
    const val = parseInt(line.slice(1), 10)
    const num2 = num + sign * val
    if (sign > 0) {
      ct += Math.floor(num2 / 100)
    } else {
      ct -= Math.floor(num2 / 100)
      if (mod(num, 100) === 0) ct--
      if (mod(num2, 100) === 0) ct++
    }
    num = mod(num2, 100)
    return ct
  }, 0)
}
