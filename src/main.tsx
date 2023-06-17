import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
// npm install vitest jsdom
// npm i -D @vitest/ui
// npm install --save-dev @testing-library/react



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
