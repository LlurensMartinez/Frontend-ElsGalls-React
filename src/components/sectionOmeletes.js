import React, { Component } from 'react';
import Omelete from './omelete'

class sectionOmeletes extends Component {
  render() {
    return (
      <section id="sectionOmeletes">
        <div className="containerInfoOmeltes container">
            <h2>Prueva</h2>
            <h3>NUESTRAS TORTILLAS</h3>
            <p>*********</p>
            <p>Nuestro desafío diario: ingredientes de la más alta calidad según 
              recetas tradicionales recién interpretadas y servidas con mucha pasión 
              por el invitado. Disfrute de la excelente cocina mediterránea y del exquisito 
              servicio. Nos complace darle la bienvenida como invitados en nuestro restaurante.
            </p>
        </div>
        <div className="overflowOmeletes">
            <div className="omeletesImgContainer">
                  <Omelete image = '/images/foto5.jpg' title='Tortilla de patatas' />
                  <Omelete image = '/images/foto6.jpg' title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto7.jpg' title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto8.jpg' title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto9.jpg' title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto10.jpg'title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto11.jpg' title='Tortilla de patatas'/>
                  <Omelete image = '/images/foto12.jpg' title='Tortilla de patatas'/>
            </div>
        </div>
    </section>
    );
  }
}

export default sectionOmeletes;