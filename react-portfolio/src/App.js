import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div>
      <Header/>
    </div>
    <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/contact" element={<Contact/>} />
        </Routes>
    </Router>
  );
}

export default App;
