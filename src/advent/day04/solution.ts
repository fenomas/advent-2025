export const answers = [
  ['1351', '8345'], // real
  ['13', '43'], // test
]

//
//

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => line.split(''))
  const offs = [-1, 0, 1]

  let ct = 0
  dat.forEach((row, y) => {
    row.forEach((loc, x) => {
      if (loc !== '@') return
      let ns = 0
      offs.forEach((dy) => {
        if (!dat[y + dy]) return
        offs.forEach((dx) => {
          if (dx === 0 && dy === 0) return
          const nab = dat[y + dy][x + dx]
          if (nab === '@') ns++
        })
      })
      if (ns < 4) ct++
    })
  })
  return ct
}

export const part2 = (input: string) => {
  const dat = input.split('\n').map((line) => line.split('').map((ch) => ({ ch, nabs: 0 })))
  const offs = [-1, 0, 1]

  let atLocs = [{ x: 0, y: 0 }].slice(0, 0)
  dat.forEach((row, y) => {
    row.forEach((obj, x) => {
      if (obj.ch !== '@') return
      atLocs.push({ x, y })
      offs.forEach((dy) => {
        if (!dat[y + dy]) return
        offs.forEach((dx) => {
          if (dx === 0 && dy === 0) return
          if (dat[y + dy][x + dx]?.ch === '@') obj.nabs++
        })
      })
    })
  })

  let ct = 0
  let done = false
  while (!done) {
    done = true
    atLocs = atLocs.filter(({ x, y }) => {
      const obj = dat[y][x]
      if (obj.nabs >= 4) return true
      obj.ch = '.'
      ct++
      done = false
      offs.forEach((dy) => {
        if (!dat[y + dy]) return
        offs.forEach((dx) => {
          if (dx === 0 && dy === 0) return
          const nobj = dat[y + dy][x + dx]
          if (nobj?.ch === '@') nobj.nabs--
        })
      })
      return false
    })
  }
  return ct
}
