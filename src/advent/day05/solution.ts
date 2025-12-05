export const answers = [
  ['640', '365804144481581'], // real
  ['3', '14'], // test
]

//
//

export const part1 = (input = '') => {
  const [as, bs] = input.split('\n\n').map((lines) => lines.split('\n'))
  const ranges = as.map((line) => line.split('-').map(Number))
  const ids = bs.map(Number)

  return ids.reduce((ct, id) => {
    const found = ranges.some(([min, max]) => id >= min && id <= max)
    return ct + (found ? 1 : 0)
  }, 0)
}

export const part2 = (input = '') => {
  const [as] = input.split('\n\n').map((lines) => lines.split('\n'))
  const ranges = as.map((line) => line.split('-').map(Number))

  while (true) {
    let found = false
    for (let i = 0; i < ranges.length; i++) {
      for (let j = i + 1; j < ranges.length; j++) {
        const [min1, max1] = ranges[i]
        const [min2, max2] = ranges[j]
        if (max1 >= min2 && max2 >= min1) {
          ranges[i] = [Math.min(min1, min2), Math.max(max1, max2)]
          ranges.splice(j, 1)
          found = true
        }
      }
    }
    if (!found) break
  }

  return ranges.reduce((ct, [min, max]) => ct + (max - min + 1), 0)
}
