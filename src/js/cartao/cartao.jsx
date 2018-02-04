import React from 'react';

class Cartao extends React.Component {
    render(){
        return (
            <div className="card sticky-action">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="http://materializecss.com/images/office.jpg" />
                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">Título do Cartão<i className="material-icons right">more_vert</i></span>
                    <p><a href="#">link cartão</a></p>
                </div>
                <div className="card-action">
                    <p><a href="#">Ver mais</a></p>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">Título<i className="material-icons right">close</i></span>
                    <p>Texto cartão!!!!</p>
                </div>
            </div>
        );
    }
}

export default Cartao;