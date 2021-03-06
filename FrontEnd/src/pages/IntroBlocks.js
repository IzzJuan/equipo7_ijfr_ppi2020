import React, { Component } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import '../index.css';
import logo from '../img/r3ai_logo.png';
import '../introblocksresponsive.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export default class NavBar extends Component {

    componentDidMount() {
        if (cookies.get('email_usuario')) {
            window.location.href = "../profile"
        }
    }

    render() {
        return (
            <div>
                <section className="introblocks">
                    <div className="container">
                        <ReactBootStrap.Container>
                            <ReactBootStrap.Row>
                                <ReactBootStrap.Col md={4} className='itemblock' ><h2>
                                    "La Herramienta Más Eficiente Para Combatir El Cambio Climatico
                                    Eres Tú"</h2>
                                    <ReactBootStrap.Image src={logo} fluid />
                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col md={{ span: 4, offset: 0 }} className='itemblock2'>
                                    <h3>¿Quienes Somos?</h3>
                                    <p>
                                        Nuestros nombres son Juan Jose Garcia, Sebastian Mendoza y Juan
                                        Pablo Rivera. Tres estudiantes que trabajamos en el proyecto
                                        R3AI, el cual esta impulsado por el Politecnico Colombiano Jaime
                                        Isaza Cadavid y la intitucion educativa INEM Jose Felix De
                                        Restrepo mediante una propuesta llamada Proyecto Pedagogico
                                        Integrador (PPI).
                                        <br />
                                    </p>

                                    <h3>Por Que R3AI?</h3>
                                    <p>R3AI proviene de las siglas en ingles Reuse Reduce and Recycle Artificial
                                    Inteligence</p>


                                </ReactBootStrap.Col>
                                <ReactBootStrap.Col md={{ span: 4, offset: 0 }} className='itemblock3'>
                                    <h3>¿Que Es R3AI?</h3>
                                    <p>R3AI es una app mediante la cual se informa, incentiva y ayuda
                                    en la clacificacion de residuos solidos a las personas para hacerlo
                                    de manera eficaz, rapida y eficiente.
                                    <br /></p>
                                    <h3>¿Por Que Somos Los Mejores?</h3>
                                    <p>Nos diferenciamos de proyectos similares pues poseemos la ventaja de la portabilidad y
                                    de contar una interfaz amigable que le permite a nuestros usuarios una experiencia didactica y
                                    de aprendizaje.</p>
                                </ReactBootStrap.Col>
                            </ReactBootStrap.Row>
                        </ReactBootStrap.Container>

                    </div>
                </section>
            </div>
        )
    }
}