import { render } from 'solid-js/web'
import { App } from './App/App'
import './base.css'

const root = document.getElementById('root')

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error('Missing root element')
}

render(App, root as HTMLElement)
