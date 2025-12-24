export const answers = [
  ['488', '18771'], // real
  ['7', '33'], // test
]

//
//

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => {
    const target = (/\[(.+)\]/.exec(line)?.[1] || '').split('').map((c) => (c === '#' ? 1 : 0))
    const buts = line
      .split('(')
      .slice(1)
      .map((s) => s.split(')')[0])
      .map((s) => s.split(',').map(Number))
    return { target, buts }
  })

  const press = (curr: number[], but: number[]) => but.forEach((i) => curr[i]++)
  const solve = (curr: number[], buts: number[][], bix = 0): number => {
    const recurse = bix + 1 < buts.length
    const a = recurse ? solve(curr, buts, bix + 1) : Infinity
    press(curr, buts[bix])
    const b = curr.every((v) => v % 2 === 0) ? 1 : Infinity
    const c = recurse ? 1 + solve(curr, buts, bix + 1) : Infinity
    press(curr, buts[bix])
    return Math.min(a, b, c)
  }

  return dat.reduce((ct, { target, buts }) => ct + solve(target, buts), 0)
}

//
//

export const part2 = (input = '') => {
  const dat = input.split('\n').map((line) => {
    const target = (/\{(.+)\}/.exec(line)?.[1] || '').split(',').map(Number)
    const buts = line
      .split('(')
      .slice(1)
      .map((s) => s.split(')')[0])
      .map((s) => s.split(',').map(Number))
    return { target, buts }
  })

  // pre-solver to simplify trivial cases
  const solve = ({ target, buts }: (typeof dat)[0]): number => {
    const affect = target.map((_, i) => buts.filter((b) => b.includes(i)))

    // check for columns affected by only one button
    const col = affect.findIndex((a) => a.length === 1)
    if (col >= 0) {
      const but = affect[col][0]
      const ct = target[col]
      but.forEach((c) => (target[c] -= ct))
      buts.splice(buts.indexOf(but), 1)
      return ct + solve({ target, buts })
    }

    // check for cols with a non-zero minimum required presses
    for (let col = 0; col < affect.length; col++) {
      const colButs = affect[col]
      const maxPresses = colButs.map((b) => Math.min(...b.map((c) => target[c])))
      const tot = maxPresses.reduce((a, b) => a + b, 0)
      for (let i = 0; i < colButs.length; i++) {
        const b = colButs[i]
        const otherTot = tot - maxPresses[i]
        if (target[col] > otherTot) {
          const need = target[col] - otherTot
          b.forEach((c) => (target[c] -= need))
          return need + solve({ target, buts })
        }
      }
    }

    cache = {}
    return outerSolver(target, buts)
  }

  // memoized outer solver for a new target state
  let cache: Record<string, number> = {}
  const outerSolver = (target: number[], buts: number[][]) => {
    if (target.every((v) => v === 0)) return 0
    const key = target.join(',')
    if (cache[key] !== undefined) return cache[key]
    return (cache[key] = paritySolver(target, buts))
  }

  // inner parity solver recursing by button
  const paritySolver = (curr: number[], buts: number[][], bix = 0) => {
    const results: number[] = []
    const parity = curr.map((v) => v % 2)
    if (parity.every((v) => v === 0)) {
      const halved = curr.map((v) => v / 2)
      results.push(2 * outerSolver(halved, buts))
    }
    if (bix >= buts.length) return Math.min(...results, Infinity)

    results.push(paritySolver(curr, buts, bix + 1))
    buts[bix].forEach((i) => curr[i]--)

    if (curr.every((v) => v === 0)) results.push(1)

    if (curr.every((v) => v >= 0)) {
      results.push(1 + paritySolver(curr, buts, bix + 1))
    }
    buts[bix].forEach((i) => curr[i]++)

    return Math.min(...results)
  }

  return dat.reduce((ct, obj) => ct + solve(obj), 0)
}
