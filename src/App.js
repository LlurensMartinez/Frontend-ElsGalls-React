import React from 'react';
import Navbar from './components/navbar'
import Home from './components/home'
import SectionInfo from './components/sectionInfo'
import SectionImages from './components/sectionImages'
import Menu from './components/menu'
import SectionOmeletes from './components/sectionOmeletes'
import SectionComentarios from './components/sectionComentarios'
import SectionContact from './components/sectionContact'
import Footer from './components/footer'

import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <SectionInfo />
      <SectionImages />
      <Menu />
      <SectionOmeletes />
      <SectionComentarios />
      <SectionContact />
      <Footer />
    </>
  );
}

export default App;
