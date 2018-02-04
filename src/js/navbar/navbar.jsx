import React from 'react';

import NavMenu from './nav-menu'

class Navbar extends React.Component {
    render(){
        let menu = [
            {titulo: 'Home', link: '#home'},
            {titulo: 'Sobre', link: '#sobre'},
            {titulo: 'Contato', link: '#contato'}
        ];
        let corNavbar = "nav-wrapper " + this.props.cor;

        return (
            <nav>
                <div className={corNavbar}>
                    <div className="container">
                        <a href="#" className="brand-logo">{this.props.titulo}</a>
                        <NavMenu menu={menu} />
                    </div>
                </div>
            </nav>
        );
    };
}

export default Navbar;