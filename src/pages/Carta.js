import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Carta extends Component {
    render() {
        return (
            <>
                <div className="row">

                <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://recetas-rapidas.es/wp-content/uploads/2018/09/tortilladepatatas-recetas-rapidas-1-848x477.jpg" />
                            </div>
                            <div className="card-content">
                                <span><b>TORTILLAS</b></span>
                                <p>......................</p>
                                <p>Consulta nuestra gran variedad de tortillas de todo tipo.</p>
                            </div>
                            <div className="card-action">
                                <Link to={'carta/tortillas'}>VER TORTILLAS</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://www.elmonstruodelasgalletas.com/wp-content/uploads/2010/09/bocadillo_tortilla-1280x720.jpg" />
                            </div>
                            <div className="card-content">
                                <span><b>BOCADILLOS</b></span>
                                <p>......................</p>
                                <p>Consulta nuestra gran variedad de bocadillos tanto frios como calientes hechos al momento.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">VER CARTA</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://feccoo-extremadura.org/wp-content/uploads/2019/07/Tapa.jpg" />
                            </div>
                            <div className="card-content">
                                <span><b>TAPAS</b></span>
                                <p>......................</p>
                                <p>Consulta nuestra gran variedad de bocadillos tanto frios como calientes hechos al momento.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">VER CARTA</a>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://www.teresatxo.com/cache/secciones-publicas/2017/10/18/bar-teresatxo-restaurante-donostia-platos-combinados-img-8050_cabecera.jpg" />
                            </div>
                            <div className="card-content">
                                <span><b>PLATOS COMBINADOS</b></span>
                                <p>......................</p>
                                <p>Consulta nuestra gran variedad de bocadillos tanto frios como calientes hechos al momento.</p>
                            </div>
                            <div className="card-action">
                                <a href="#">VER CARTA</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Carta;