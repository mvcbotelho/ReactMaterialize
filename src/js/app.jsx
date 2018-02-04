import React from 'react';
import ReactDOM from 'react-dom';

import Titulo from './titulo/titulo';
import Navbar from './navbar/navbar';
import Cartao from './cartao/cartao';

let App = (
    <div>
        <Navbar titulo="React" cor="orange" />
        <div className="container">
            <Titulo/>
            <div className="row">
                <div className="col m4">
                    <Cartao/>
                </div>
            </div>
        </div>
    </div>
);

ReactDOM.render(App, document.getElementById('app'));