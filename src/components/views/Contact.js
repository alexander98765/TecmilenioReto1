//@fileoverview Component that generates the applications contact form section

import {React, useState} from 'react';
//Import react bootstrap for library to validate contact form
import Form from 'react-bootstrap/Form';
//Import Alert library to show confirmation message after form validation is correct
import Alert from 'react-bootstrap/Alert';

//Function that creates and returns the applications contact form section
//@return Contact form UI in html format
const Contact = () => {

    //Create state variables
    const [validated, setValidated] = useState(false);
    const [showConf, setShowConf] = useState(false);

    //Create function to handle form submit
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }else{
        //If validation is correct, avoid sumbmiting form because it is just an example and data is not necesary to preserv into DB
        setShowConf(true)
        event.preventDefault();
      }
      
      //Change form validation status 
      setValidated(true);
    };

  return (
    <div>
        <section id="contactContainer" className="contacto">
            <div className="container">
                <div className="container d-flex overflowContactSection">          
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12">
                            <p>
                                <span className="titulo2">¿Tienes preguntas o quieres obtener algún curso? Mándame un correo</span>
                            </p>
                            <div>
                                <span className="contactText">Comprueba mi curso de Educación Financiera, verás un cambio en tu administración y control en tus finanzas. Con mi curso contarás con los conocimientos para crear tu propio negocio.</span>
                                <p className='invitationLegend'>
                                Qué esperas, inscribete ya y comencemos juntos la realización de tu sueño.!!!!!
                                </p>
                            </div>
                            <div>
                                <ul className="contactInfoList">
                                <li><span><i className="fa-solid fa-phone-volume"></i> Teléfono: +52 5587586542</span></li>
                                <li><i className="fa-solid fa-envelope-circle-check"></i> Soporte: support@educacionfinanciera.com</li>
                                </ul>
                            </div>
                            </div>
                        </div>                          
                    </div>

                    
                    <div className="col-md-6 inputContactContainer">                    
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className="row">                            
                            <div className="col-md-6">                            
                                <label htmlFor="txtNombre" className="form-label contactFormLabel">Nombre</label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nombre"
                                    defaultValue=""
                                    className='formControl'                                    
                                    pattern = "^[a-zA-Z ]*$"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Ingresa tu nombre
                                </Form.Control.Feedback>
                            </div>
                            <div className="col-md-6">                            
                                <label htmlFor="txtCorreo" className="form-label contactFormLabel">Correo electrónico</label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="Correo electrónico"
                                    defaultValue=""
                                    className='formControl'
                                    pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/"
                                />
                                <Form.Control.Feedback type="invalid">
                                    Ingresa tu correo electrónico
                                </Form.Control.Feedback>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">                            
                                <label htmlFor="txtTelefono" className="form-label contactFormLabel">Teléfono de contacto</label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Teléfono de contacto"
                                    defaultValue=""
                                    className='formControl'
                                    maxLength="14"
                                    pattern="[0-9]*"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                          event.preventDefault();
                                        }
                                      }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Ingresa tu teléfono
                                </Form.Control.Feedback>
                            </div>
                            <div className="col-md-6">                            
                                <label htmlFor="cmbMotivoContacto" className="form-label contactFormLabel">Motivo de contacto</label>
                                <Form.Select required aria-label="" className='formControl'>                                    
                                    <option value="">Selecciona uina opción</option>
                                    <option value="1">Tengo preguntas, dudas, comentarios</option>
                                    <option value="2">Quiero un curso o plantilla</option>
                                    <option value="3">Necesito soporte</option>
                                </Form.Select>
                                <Form.Control.Feedback type="invalid">
                                    Selecciona el motivo de contacto
                                </Form.Control.Feedback>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                            <label htmlFor="taComentarios" className="contactFormLabel">Comentarios</label>                                                            
                            <Form.Control as="textarea" required className='formControl' maxLength="70" /> 
                            <Form.Control.Feedback type="invalid">
                                    Ingresa tu comentario o dudas
                            </Form.Control.Feedback>                           
                            </div>  
                        </div>
                        <div className="row">
                            <div className="col-md-12 dvBtnContactContainer">
                            <button type="submit" className="btn btnContacto">Quiero que me contacten <i className="fa-regular fa-paper-plane  fa-fade"></i></button>
                            </div>

                        </div> 
                        {showConf ? (
                        <div className='row rowSeparationSm'>
                            <div className='col-md-12'>
                                <Alert variant='success' onClose={() => setShowConf(false)} dismissible>
                                    <Alert.Heading>Datos enviados correctamente!</Alert.Heading>
                                    <p>
                                    Gracias, en breve me pondré en contacto contigo.
                                    </p>
                                </Alert>
                            </div>
                        </div>      
                        ):(
                            <></>
                        )}            
                    </Form>
                    </div>                                       

                </div>
                </div>
            </div>
            </section>           
    </div>
  );
}

export default Contact;