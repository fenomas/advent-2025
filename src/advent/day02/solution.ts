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
      const nextMatch = Number(head + head)
      if (nextMatch > b) break
      if (nextMatch >= a) ct += nextMatch
      const nextHead = String(Number(head) + 1)
      i = Number(nextHead + nextHead) - 1
    }
    return ct
  }, 0)
}

export const part2 = (input: string) => {
  return input.split(',').reduce((ct, line) => {
    const [a, b] = line.split('-').map(Number)
    for (let i = a; i <= b; i++) {
      const s = i.toString()
      const ix = (s + s).indexOf(s, 1)
      if (ix < s.length) ct += i
    }
    return ct
  }, 0)
}
