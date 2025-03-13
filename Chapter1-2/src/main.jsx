import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './Products.jsx';
import JSXFunctions from './JSXFunctions.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <Products />

    <JSXFunctions />
<h1>Test</h1>

  </StrictMode>,
)


