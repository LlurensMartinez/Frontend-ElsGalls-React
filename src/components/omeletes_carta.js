import React, { Component } from 'react';

class omeletes_carta extends Component {
    render() {
        const { name, url, sandwich, plate } = this.props.omelete;

        return (
            <div class="container">
                <div class="divider black"></div>
                <br/>
                <div class="row center"><h5><span class="orange-text text-darken-2"><strong>{name}</strong></span></h5></div>
                <div class="row">
                    <div class="col s4">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row z-depth-2">
                            <img class="responsive-img" src={url} alt={name}/>
                        </div>
                    </div>
                    <div class="col s8">
                        <div class="row">
                            <div class="col s6 center">
                                <div class="row"><b>Bocadillo</b></div>
                                <div class="row">
                                    <div class="col s6">
                                        <p><b>N</b></p>
                                    </div>
                                    <div class="col s6">
                                        <p>{sandwich.normal}€</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <p><b>&#189;</b></p>
                                    </div>
                                    <div class="col s6">
                                        <p>{sandwich.middle}€</p>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col s6">
                                        <p><b>M</b></p>
                                    </div>
                                    <div class="col s6">
                                        <p>{sandwich.mini}€</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col s6 center">
                                <div class="row"><b>Pincho</b></div>
                                <div class="row"><p>{plate.normal}€</p></div>
                                <div class="row"><p>{plate.middle}€</p></div>
                                <div class="row"><p>X</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default omeletes_carta;