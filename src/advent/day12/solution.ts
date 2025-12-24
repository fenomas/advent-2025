export const answers = [
  ['403', '1'], // real
  ['2', '1'], // test
]

//
//

export const part1 = (input = '') => {
  const lines = input.split('\n')
  const pieces = Array.from(Array(6), (_, i) => lines.slice(i * 5 + 1, i * 5 + 4))
  const sizes = pieces.map((p) => p.join('').split('#').length - 1)

  const boards = lines.slice(30).map((s) => {
    const [size, cts] = s.split(':')
    const loc = size.split('x').map(Number)
    const counts = cts.trim().split(' ').map(Number)
    const tot = counts.map((ct, i) => ct * sizes[i]).reduce((a, b) => a + b, 0)
    const ratio = (loc[0] * loc[1]) / tot
    return { loc, counts, tot, ratio }
  })

  return boards.filter((b) => b.ratio > 1.2).length // :shrug:
}

export const part2 = () => 1
