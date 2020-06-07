import React, { Component } from 'react';

import omeletes from '../data/omeletes.json';

import Omeletes_carta from '../components/omeletes_carta'

class Tortillas extends Component {
    render() {
        const renderOmeletes = omeletes.map(omelete =>
            <Omeletes_carta omelete={omelete}/>
            );

        return (
            <>
              <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="https://recetas-rapidas.es/wp-content/uploads/2018/09/tortilladepatatas-recetas-rapidas-1-848x477.jpg"/>
                        </div>
                    </div>
                </div>
            </div>

            <h2 class="center"><span><b>Tortillas</b></span></h2>
            
            <div class="container">
                <div class="divider black"></div>
                <br/>

                <div class="row">
                    <div class="col s4 center"><b>N</b> Normal</div>
                    <div class="col s4 center"><b>&#189;</b> Medio</div>
                    <div class="col s4 center"><b>M</b> Mini</div>
                </div>
            </div>

            {renderOmeletes}

            </>
        );
    }
}

export default Tortillas;