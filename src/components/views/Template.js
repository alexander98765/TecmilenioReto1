//@fileoverview Component that generates the section to show financial templates. All resources must redirect to contact form

import React from 'react';

//Function that creates and returns financial templates. Each template is returned in bootstrap card format
//@return Templates UI in html format
const Template = () => {
  return (
    <div>
        <section id="contenedorPlantillas" className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                <span className="titulo2">Plantillas para la administración de tus finanzas</span>
                </div>
            </div>
            <div className="row rowSeparationSm">
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">            
                    <div className="card-body padding2">
                        <div className='cardInner'>                        
                            <h5 className="card-title bold titulo4">Presupuesto inicial de emprendimiento</h5>
                            <p className="card-text justifyText">Listar las fuentes de financiamiento (inversores, préstamos y otros) y costos estimados (por única vez y mensuales).</p>
                            <a href="#contactContainer" className="btn btn-success">Descargar gratis <i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>            
                </div>                    

                </div>
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                            <h5 className="card-title bold titulo4">Control de gastos</h5>
                            <p className="card-text justifyText">Registro detallado de todos tus gastos, clasificados por categorías y subcategorías. Obten totales y porcentaje de gasto con apertura por categoría.</p>
                            <a href="#contactContainer" className="btn btn-success">Descargar gratis <i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>            
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                            <h5 className="card-title bold titulo4">Presupuesto de gastos personales</h5>
                            <p className="card-text justifyText">Informes mensuales y por categoría que ayuda a establecer un presupuesto mensual del gasto y hacer un seguimiento.</p>
                            <a href="#contactContainer" className="btn btn-success btnPlantilla"></a>
                        </div>
                    </div>            
                </div>
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                            <h5 className="card-title bold titulo4">Diagrama de Gantt</h5>
                            <p className="card-text justifyText">Control de las distintas fases del proyecto y su porcentaje de avance de manera dinámica y a nivel semanal, establece el inicio y duración en terminos de cada fase.</p>
                            <a href="#contactContainer" className="btn btn-success">Descargar gratis <i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>            
                </div>
                </div>
            </div>
            <div className="row rowSeparationSm">
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                            <h5 className="card-title bold titulo4">Informe de ventas básico</h5>
                            <p className="card-text justifyText">Organiza tus ventas en periodos trimestrales para un control aún más preciso y organizado para llevar la contabilidad de tu negocio.</p>
                            <a href="#contactContainer" className="btn btn-success btnPlantilla"></a>
                        </div>
                    </div>            
                </div>
                </div>
                <div className="col-md-6 col-lg-3">          
                    <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                                <h5 className="card-title bold titulo4">Dashboard de cobranzas</h5>
                                <p className="card-text justifyText">Diseñada para ayudarte a administrar de manera efectiva las facturas por cobrar de tus clientes y el estado de tu de facturación.</p>
                                <a href="#contactContainer" className="btn btn-success btnPlantilla1"></a>
                        </div>
                    </div>            
                    </div>          
                </div>
                <div className="col-md-6 col-lg-3">          
                    <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                                <h5 className="card-title bold titulo4">Análisis de la competencia</h5>
                                <p className="card-text justifyText">Estudio de mercado para organizar toda la información de tu competencia. Explora el panorama y localiza los puntos de crecimiento.</p>
                                <a href="#contactContainer" className="btn btn-success">Descargar gratis <i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>            
                    </div>        
                </div>
                <div className="col-md-6 col-lg-3">
                <div className="card text-center noBorder">
                    <div className="card-body padding2">
                        <div className='cardInner'>
                            <h5 className="card-title bold titulo4">Presupuesto de Marketing</h5>
                            <p className="card-text justifyText">Seguimiento del gasto en marketing, identificando lo que queda de presupuesto a gastar en lo que queda del año.</p>
                            <a href="#contactContainer" className="btn btn-success">Descargar gratis <i className="fa-solid fa-download"></i></a>
                        </div>
                    </div>            
                </div>
                </div>
            </div>
            </section>
    </div>
  );
}

export default Template;