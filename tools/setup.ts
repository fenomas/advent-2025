#!/usr/bin/env node

import { existsSync, mkdirSync, writeFile } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const daysDir = resolve(__dirname, '..', 'src', 'advent')

// fs helpers
const onErr = (err: unknown) => err && console.warn(err)
const touchDir = (dirName: string) => {
  const path = resolve(daysDir, dirName)
  if (existsSync(path)) return
  onErr(mkdirSync(path))
}
const touchFile = (dirName: string, fileName: string, content = '') => {
  const path = resolve(daysDir, dirName, fileName)
  if (existsSync(path)) return
  writeFile(path, content, onErr)
}

// setup logic
const setupFiles = () => {
  touchDir(daysDir)
  Array.from(Array(12)).forEach((_, i) => {
    const day = i + 1
    const dstr = day < 10 ? `0${day}` : `${day}`
    const dayDir = `day${dstr}`
    touchDir(dayDir)
    touchFile(dayDir, `solution.ts`, '')
    touchFile(dayDir, `input.md`, '')
    touchFile(dayDir, `input-test.md`, '')
  })
}

setupFiles()
