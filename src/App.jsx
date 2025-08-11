import React from 'react';
import Home from './pages/Home/Home';
import Objectives from './pages/Objectives/Objectives';
import Schedule from './pages/Schedule/Schedule';
import Registration from './pages/Registration/Registration';
import Contact from './pages/Contact/Contact';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Organizer from './pages/Orgnizer/Organizer';
import Speakers from './pages/Speakers/Speakers';

function App() {
  return (
    <>
    <Navbar/>
      <Home />
      <About/>
      <Organizer />
      <Objectives />
      <Speakers/>
      <Schedule />
      <Registration />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
