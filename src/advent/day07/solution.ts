export const answers = [
  ['1518', '25489586715621'], // real
  ['21', '40'], // test
]

//
//

export const part1 = (input = '') => {
  return part2(input, true)
}

export const part2 = (input = '', asPart1 = false) => {
  const dat = input
    .split('\n')
    .map((line) => line.split(''))
    .filter((arr) => arr.find((c) => c !== '.'))
  let curr: number[] = dat[0].map((c) => (c === 'S' ? 1 : 0))
  let next = curr.slice()
  let ct = 0
  dat.forEach((row, y) => {
    if (y === 0) return
    next = curr.slice()
    row.forEach((c, x) => {
      if (!curr[x]) return
      if (c === '^') {
        ct++
        if (x > 0) next[x - 1] += curr[x]
        if (x < row.length - 1) next[x + 1] += curr[x]
        next[x] = 0
      }
    })
    curr = next
  })
  return asPart1 ? ct : curr.reduce((a, b) => a + b, 0)
}
