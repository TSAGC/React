import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './Products.jsx';
import JSXFunctions from './JSXFunctions.jsx'; 
import { Button } from 'react-bootstrap';
import MyButton from './Button.jsx';
import Rating from './rating.jsx';
import ReactiveRating from './reactiveRating.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    <Products />  {/* //^ 1 using props in a component */}

    <JSXFunctions /> {/* //^ 2 using JSX functions in a component */}

    <Button>Default</Button> {/* //^3.1 using bootstrap button */}

    <Button>Danger</Button> {/* //^3.1 using bootstrap button */}

    <MyButton type="danger" disabled={true} text="Disabled Button" />
    <MyButton type="sucess" text="Sucess Button" />
    <MyButton type="default"  text="Default Button" /> {/* //^ 3.2 */}

    {/* //^ 3.3 */}

    <Rating rating={1} />
    <Rating rating={2} />
    <Rating rating={3} />
    <Rating rating={4} />
    <Rating rating={5} />


    <ReactiveRating rating={1} /> {/* //^ 3.4-3.5 */}
    <ReactiveRating rating={2} />
    <ReactiveRating rating={3} />
    <ReactiveRating rating={4} />
    <ReactiveRating rating={5} />

  </StrictMode>,
)


