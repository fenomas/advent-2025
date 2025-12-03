export const answers = [
  ['12599655151', '20942028255'], // real
  ['1227775554', '4174379265'], // test
]

//
//

export const part1 = (input = '') => {
  return input.split(',').reduce((ct, line) => {
    const [a, b] = line.split('-').map(Number)
    for (let i = a; i <= b; i++) {
      const s = i.toString()
      if (s.length % 2 !== 0) {
        i = 10 ** s.length - 1
        continue
      }
      const head = s.slice(0, s.length / 2)
      const tail = s.slice(s.length / 2)
      if (head === tail) ct += i
    }
    return ct
  }, 0)
}

export const part2 = (input: string) => {
  return input.split(',').reduce((ct, line) => {
    const [a, b] = line.split('-').map(Number)
    for (let i = a; i <= b; i++) {
      const s = i.toString()
      for (let j = 1; j <= s.length / 2; j++) {
        if (s.length % j !== 0) continue
        const s2 = s.slice(0, j).repeat(s.length / j)
        if (s !== s2) continue
        ct += i
        break
      }
    }
    return ct
  }, 0)
}
