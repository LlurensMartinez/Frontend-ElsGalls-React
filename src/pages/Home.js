import React, { Component } from 'react';

import Navbar from '../components/navbar'
import SectionHome from '../components/sectionHome'
import SectionInfo from '../components/sectionInfo'
import SectionImages from '../components/sectionImages'
import Menu from '../components/menu'
import SectionOmeletes from '../components/sectionOmeletes'
import SectionComentarios from '../components/sectionComentarios'
import SectionContact from '../components/sectionContact'
import Footer from '../components/footer'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <SectionHome />
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
}

export default Home;