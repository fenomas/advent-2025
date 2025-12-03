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
    let left = k
    const solve = (str = line, digit = '9'): string => {
      if (digit === '-1' || left === 0) return ''
      const parts = str.split(digit)
      const nextDigit = String(Number(digit) - 1)
      if (parts.length === 1) return solve(str, nextDigit)
      if (parts.length > left) {
        const res = digit.repeat(left)
        left = 0
        return res
      }

      left -= parts.length - 1
      return parts.reduceRight((res, part, ix) => {
        const head = ix > 0 ? digit : ''
        return head + solve(part, nextDigit) + res
      }, '')
    }
    return ct + Number(solve())
  }, 0)
}
