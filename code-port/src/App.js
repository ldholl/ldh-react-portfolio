import React, {useState } from 'react';
import './App.css';

//components
import Nav from './components/Nav'
import About from './components/About';
import Contact from './components/Contact'
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div>
      <Nav></Nav>

      <main>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>

      </main>

    <Footer></Footer>
    </div>
  );
}

export default App;
