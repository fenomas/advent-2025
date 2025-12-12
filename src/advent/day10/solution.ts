export const answers = [
  ['488', '?'], // real
  ['7', '33'], // test
]

//
//

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => {
    const target = line.split('[')[1].split(']')[0]
    const buts = line
      .split('(')
      .map((s) => s.split(')')[0])
      .slice(1)
      .map((s) => s.split(',').map(Number))
    return { target, buts }
  })

  const solve = (target: string, buttons: number[][]) => {
    const init = '.'.repeat(target.length)
    if (target === init) return 0
    const seen = new Set(init)

    let frontier = [init]
    let moves = 0
    while (frontier.length) {
      moves++
      const next: string[] = []
      while (frontier.length) {
        const state = frontier.pop()?.split('') || ['.']
        for (const but of buttons) {
          const nextState = state.slice()
          but.forEach((ix) => {
            nextState[ix] = nextState[ix] === '.' ? '#' : '.'
          })
          const nextKey = nextState.join('')
          if (nextKey === target) return moves
          if (seen.has(nextKey)) continue
          seen.add(nextKey)
          next.push(nextKey)
        }
      }
      frontier = next
    }
    return -1
  }

  return dat.reduce((ct, { target, buts }) => ct + solve(target, buts), 0)
}

//
//

export const part2 = (input = '') => {
  // 🤔
  return -1
}
