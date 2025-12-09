export const answers = [
  ['32103', '8133642976'], // real
  ['40', '25272'], // test
]

//
//

export const part1 = (input = '') => {
  const dat = input.split('\n').map((line) => line.split(',').map(Number))
  const isTestCase = dat.length < 100
  const limit = isTestCase ? 10 : 1000

  dat.sort((a, b) => a[0] - b[0])
  const q = pqueue<number[]>((a, b) => b[0] - a[0]) // max-heap
  for (let i = 0; i < dat.length; i++) {
    const [ax, ay, az] = dat[i]
    const j1 = Math.min(dat.length, i + dat.length / 2)
    for (let j = i + 1; j < j1; j++) {
      const [bx, by, bz] = dat[j]
      const [dx, dy, dz] = [ax - bx, ay - by, az - bz]
      const sqdist = dx * dx + dy * dy + dz * dz

      if (q.heap.length >= limit) {
        if (sqdist > q.heap[0][0]) continue
        q.shift()
      }
      q.add([sqdist, i, j])
    }
  }
  // no need to sort back to minheap since we use all elements

  const circuits: Set<number>[] = []
  for (let k = 0; k < limit; k++) {
    const [_, i, j] = q.shift()
    const loci = circuits.find((s) => s.has(i))
    const locj = circuits.find((s) => s.has(j))
    if (loci && locj) {
      if (loci === locj) continue
      // merge
      for (const v of locj) loci.add(v)
      circuits.splice(circuits.indexOf(locj), 1)
    } else if (loci) {
      loci.add(j)
    } else if (locj) {
      locj.add(i)
    } else {
      circuits.push(new Set([i, j]))
    }
  }

  circuits.sort((a, b) => b.size - a.size)
  return circuits.slice(0, 3).reduce((acc, set) => acc * set.size, 1)
}

//
//

export const part2 = (input = '') => {
  const dat = input.split('\n').map((line) => line.split(',').map(Number))
  const limit = 8000 // hmmmmm

  dat.sort((a, b) => a[0] - b[0])
  const q = pqueue<number[]>((a, b) => b[0] - a[0]) // max-heap
  for (let i = 0; i < dat.length; i++) {
    const [ax, ay, az] = dat[i]
    const j1 = Math.min(dat.length, i + dat.length / 2)
    for (let j = i + 1; j < j1; j++) {
      const [bx, by, bz] = dat[j]
      const [dx, dy, dz] = [ax - bx, ay - by, az - bz]
      const sqdist = dx * dx + dy * dy + dz * dz

      if (q.heap.length >= limit) {
        if (sqdist > q.heap[0][0]) continue
        q.shift()
      }
      q.add([sqdist, i, j])
    }
  }
  q.heap.sort((a, b) => a[0] - b[0]) // now needs min-heap

  const circuits: Set<number>[] = []
  for (let k = 0; k < limit; k++) {
    const [_, i, j] = q.heap[k]
    const loci = circuits.find((s) => s.has(i))
    const locj = circuits.find((s) => s.has(j))
    if (loci && locj) {
      if (loci === locj) continue
      // merge
      for (const v of locj) loci.add(v)
      circuits.splice(circuits.indexOf(locj), 1)
    } else if (loci) {
      loci.add(j)
    } else if (locj) {
      locj.add(i)
    } else {
      circuits.push(new Set([i, j]))
    }
    // exit condition
    if (circuits.length === 1 && circuits[0].size === dat.length) return dat[i][0] * dat[j][0]
  }

  return -1
}

//
//
//
//
//

const pqueue = <T>(compareFn: (a: T, b: T) => number) => {
  const heap: T[] = []
  const balanceUp = (ix: number) => {
    if (ix === 0) return
    const parentIx = (ix - 1) >> 1
    if (compareFn(heap[parentIx], heap[ix]) <= 0) return
    arrSwap(heap, ix, parentIx)
    balanceUp(parentIx)
  }
  const balanceDown = (ix: number) => {
    const leftIx = ix * 2 + 1
    const rightIx = leftIx + 1
    let swapIx = ix
    if (leftIx < heap.length && compareFn(heap[leftIx], heap[swapIx]) < 0) swapIx = leftIx
    if (rightIx < heap.length && compareFn(heap[rightIx], heap[swapIx]) < 0) swapIx = rightIx
    if (swapIx === ix) return
    arrSwap(heap, ix, swapIx)
    balanceDown(swapIx)
  }
  const add = (el: T) => {
    heap.push(el)
    balanceUp(heap.length - 1)
  }
  const shift = () => {
    const ret = heap[0]
    heap[0] = heap[heap.length - 1]
    heap.length--
    balanceDown(0)
    return ret
  }
  const arrSwap = (arr: unknown[], a: number, b: number) => {
    const t = arr[a]
    arr[a] = arr[b]
    arr[b] = t
  }
  return { add, shift, heap }
}
