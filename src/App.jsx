import React from 'react';
import Home from './pages/Home/Home';
import Objectives from './pages/Objectives/Objectives';
import Schedule from './pages/Schedule/Schedule';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <Objectives />
      <Schedule />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
