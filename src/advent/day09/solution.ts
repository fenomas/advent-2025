export const answers = [
  ['4750176210', '1574684850'], // real
  ['50', '24'], // test
]

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => line.split(',').map(Number))

  let max = 0
  for (let i = 0; i < dat.length; i++) {
    const [ax, ay] = dat[i]
    for (let j = i + 1; j < dat.length; j++) {
      const [bx, by] = dat[j]
      const dx = Math.abs(ax - bx)
      const dy = Math.abs(ay - by)
      const area = (dx + 1) * (dy + 1)
      if (area > max) max = area
    }
  }

  return max
}

//
//

export const part2 = (input: string) => {
  const dat = input.split('\n').map((line) => line.split(',').map(Number))

  // Assumes input has no exactly adjacent walls!
  
  const horiz: number[][] = []
  const vert: number[][] = []
  dat.forEach(([x, y], i) => {
    const [nx, ny] = dat[(i + 1) % dat.length]
    if (y === ny) horiz.push([y, Math.min(x, nx), Math.max(x, nx)])
    if (x === nx) vert.push([x, Math.min(y, ny), Math.max(y, ny)])
  })
  horiz.sort((a, b) => a[0] - b[0])
  vert.sort((a, b) => a[0] - b[0])

  const containsWalls = (minx = 0, maxx = 0, miny = 0, maxy = 0) => {
    for (let i = 0; i < vert.length; i++) {
      const [vx, vminy, vmaxy] = vert[i]
      if (vx <= minx) continue
      if (vx >= maxx) break
      if (miny < vmaxy && maxy > vminy) return true
    }
    for (let i = 0; i < horiz.length; i++) {
      const [hy, hminx, hmaxx] = horiz[i]
      if (hy <= miny) continue
      if (hy >= maxy) break
      if (minx < hmaxx && maxx > hminx) return true
    }
    return false
  }

  const naiveInteriorCheck = (x = 0, y = 0) => {
    const crosses = [0, 0]
    for (let i = 0; i < vert.length; i++) {
      const [vx, vy1, vy2] = vert[i]
      if (x === vx) continue
      if (y <= vy1) continue
      if (y >= vy2) continue
      crosses[x < vx ? 0 : 1] += 1
    }
    return crosses.every((v) => v % 2 === 1)
  }

  let max = 0
  for (let i = 0; i < dat.length; i++) {
    const [ax, ay] = dat[i]
    for (let j = i + 1; j < dat.length; j++) {
      const [bx, by] = dat[j]
      const area = (Math.abs(ax - bx) + 1) * (Math.abs(ay - by) + 1)
      if (area <= max) continue

      const minx = Math.min(ax, bx)
      const maxx = Math.max(ax, bx)
      const miny = Math.min(ay, by)
      const maxy = Math.max(ay, by)
      if (containsWalls(minx, maxx, miny, maxy)) continue
      if (!naiveInteriorCheck((ax + bx) >> 1, (ay + by) >> 1)) continue
      max = area
    }
  }
  return max
}
