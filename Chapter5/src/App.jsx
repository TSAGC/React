// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Routeview from './Pages/RoutesView.jsx';
import Test from './Pages/test.jsx';
import Rating41 from './Components/Rating4.1.jsx';
import Products from './Components/ProductRating4.2'; 
import Products52 from './Components/products52.jsx';
// import About from './pages/About.jsx';
// import Contact from './pages/Contact.jsx';
// import Products from './components/Products.jsx';
// import JSXFunctions from './components/JSXFunctions.jsx';
// import MyButton from './components/MyButton.jsx';

function App() {
    return (
        <Router>
            {/* <nav>
                <ul>
                    <li><Link to="/">Show Route Page</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav> */}

            <Routes>
                <Route path="/" element={<Routeview />} />
                <Route path="/test" element={<Test />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/contact" element={<Routeview />} />
                <Route path="/Products52" element={<Products52 />} />
            </Routes>
        </Router>
    );
}

export default App;