import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserForm from './pages/UserForm.jsx';
import UserFormWithErrorNoty from './pages/UserFormWithErrorNotty.jsx';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/UserForm" element={<UserForm />} />
                <Route path="/UserFormWithErrorNoty" element={<UserFormWithErrorNoty />} />              
            </Routes>
        </Router>
    );
}
-
export default App;