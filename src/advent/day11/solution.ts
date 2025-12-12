export const answers = [
  ['500', '287039700129600'], // real
  ['5', '-1'], // test
  ['-1', '2'], // test 2
]

//
//

export const part1 = (input = '', src = 'you', tgt = 'out') => {
  type Node = Record<string, any>
  const dat: Record<string, Node> = {}
  input.split('\n').forEach((line) => {
    const [from, to] = line.split(': ')
    if (!dat[from]) dat[from] = { name: from, next: [], prev: [], data: {} }
    for (const tgt of to.split(' ')) {
      if (!dat[tgt]) dat[tgt] = { name: tgt, next: [], prev: [], data: {} }
      dat[from].next.push(dat[tgt])
      dat[tgt].prev.push(dat[from])
    }
  })
  if (!dat[src] || !dat[tgt]) return -1

  // BFS mark nodes in cone between src and tgt
  const walkNodes = (from: string, dir: 1 | -1, cb: (node: Node) => void) => {
    Object.values(dat).forEach((node) => (node.data.visited = false))
    const todo = [dat[from]]
    while (todo.length) {
      const curr = todo.shift() || ''
      if (!curr || curr.data.visited) continue
      curr.data.visited = true
      cb(curr)
      const nextNodes = dir === 1 ? curr.next : curr.prev
      todo.push(...nextNodes)
    }
  }
  Object.values(dat).forEach((node) => (node.data.ct = 0))
  walkNodes(src, 1, (node) => (node.data.ct += 1))
  walkNodes(tgt, -1, (node) => (node.data.ct += 1))

  // DFS count paths
  dat[tgt].data.paths = 1
  const recurse = (acc: number, node: Node): number => {
    if (node.data.ct < 2) return acc
    if (node.data.paths > 0) return acc + node.data.paths
    node.data.paths = node.next.reduce(recurse, 0)
    return acc + node.data.paths
  }
  return recurse(0, dat[src])
}

//
//

export const part2 = (input: string, src = 'svr', tgt = 'out') => {
  const keys = ['fft', 'dac']
  let mid = part1(input, ...keys)
  if (mid === -1) {
    keys.reverse()
    mid = part1(input, ...keys)
  }
  return part1(input, src, keys[0]) * mid * part1(input, keys[1], tgt)
}
