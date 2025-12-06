export const answers = [
  ['4648618073226', '7329921182115'], // real
  ['4277556', '3263827'], // test
]

//
//

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => line.trim().split(/\s+/))
  const signs = dat.pop() || ['*']
  const nums = dat.map((arr) => arr.map(Number))

  const vals: number[] = signs.map((s) => (s === '*' ? 1 : 0))
  signs.forEach((sign, x) => {
    nums.forEach((_, y) => {
      vals[x] = sign === '*' ? vals[x] * nums[y][x] : vals[x] + nums[y][x]
    })
  })
  return vals.reduce((a, b) => a + b, 0)
}

//
//

export const part2 = (input = '') => {
  const dat = input.split('\n')
  const signs = (dat.pop() || '').trim().split(/\s+/)

  const x = dat.map((line) => line.split(''))
  const transposed = x[0].map((_, i) => x.map((_, j) => x[j][i]))
  const numstrs = transposed.map((arr) => arr.join('').trim())

  let total = 0
  while (signs.length) {
    const sign = signs.pop() || ''
    let val = sign === '*' ? 1 : 0
    while (true) {
      const str = numstrs.pop()
      if (!str) break
      val = sign === '*' ? val * Number(str) : val + Number(str)
    }
    total += val
  }
  return total
}
