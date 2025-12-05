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

//
//

export const part2 = (input: string) => {
  const dat = input.split('\n').map((line) => line.split('').map((ch) => ({ ch, nabs: 0 })))
  const offs = [-1, 0, 1]

  const locs = [[0, 0]].slice(0, 0)
  dat.forEach((row, y) => {
    row.forEach((obj, x) => {
      if (obj.ch !== '@') return
      locs.push([x, y])
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
  while (locs.length > 0) {
    const [x, y] = locs.pop() || [-1, -1]
    const obj = dat[y][x]
    if (obj.ch !== '@') continue
    if (obj.nabs >= 4) continue
    obj.ch = '.'
    ct++
    offs.forEach((dy) => {
      if (!dat[y + dy]) return
      offs.forEach((dx) => {
        if (dx === 0 && dy === 0) return
        const nobj = dat[y + dy][x + dx]
        if (nobj?.ch !== '@') return
        nobj.nabs--
        if (nobj.nabs < 4) locs.push([x + dx, y + dy])
      })
    })
  }
  return ct
}
