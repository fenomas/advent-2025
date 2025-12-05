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
      const len = s.length
      if (len < 2) continue
      const divs = Array.from(Array(len - 1), (_, k) => k + 1).filter((d) => len % d === 0)
      const candidates = divs
        .flatMap((d) => {
          const head = s.slice(0, d)
          const head2 = String(Number(head) + 1)
          return [head.repeat(len / d), head2.repeat(len / d)]
        })
        .map(Number)
        .filter((n) => n >= i && n <= b)
      if (candidates.length === 0) break
      i = Math.min(...candidates)
      ct += i
    }
    return ct
  }, 0)
}
