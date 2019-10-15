import React, { Component } from 'react';
import FormContact from './formContact'

class sectionContact extends Component {
  render() {
    return (
      <section id="sectionContact">
        <div className="containerContact">
            <div className="containerEmailImgOpen">
                <h4>ENVIAR EMAIL</h4>
                <FormContact />
            </div>
                
            <div className="containerEmailImgOpen">
                <img src="https://crujienteyaldente.com/wp-content/uploads/2017/02/tortilla-de-patatas_opt.jpg" alt="Tortilla de Patatas"/>
            </div>

            <div className="containerEmailImgOpen">
                <div>
                    <h4>CONTACTOS</h4>
                    <i class="material-icons small">phone</i>
                    <p><b>Telefono:</b>  93 323 44 78</p>
                    <i class="material-icons small">drafts</i>
                    <p><b>Email:</b>  elsgallsscp@gmail.com</p>
                </div>

                <div>
                    <h4>APERTURA</h4>
                    <i class="material-icons small">watch_later</i>
                    <p><b>Lunes-Viernes:</b>  7:00 - 22:00</p>
                    <p><b>Sabados:</b>  8:00 - 16:00</p>
                </div>
            </div>
        </div>
      </section>
    );
  }
}

export default sectionContact;