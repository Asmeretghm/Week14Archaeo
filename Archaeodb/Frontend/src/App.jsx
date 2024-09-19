import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Archaeopage from './Archaeopage';


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>

                <Route path="/Navbar" element={<Navbar />} />
                <Route path="/" element={<Hero />} />
                <Route path="/Archaeopage" element={<Archaeopage />} />
                <Route path="/Hero" element={<Hero />} />
                <Route path="/Footer" element={<Footer />} />
            </Routes>
        </Router>
    );
}

export default App;