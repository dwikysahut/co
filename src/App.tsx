import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ContactList from './pages/ContactList';


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<ContactList />} />
      </Routes>
    </Router>
  );
}

export default App;
