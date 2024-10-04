import {createRoot} from 'react-dom/client'
import { App } from '../components/App'

const elRoot = document.getElementById('root')
const root = createRoot(elRoot as HTMLElement)

root.render(<App/>)