import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Received from './components/Received';
import SomeOtherPage from './components/SomeOtherPage'; // Make sure to create this component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Received />} />
                <Route path="/some-other-page" element={<SomeOtherPage />} />
            </Routes>
        </Router>
    );
}

export default App;
