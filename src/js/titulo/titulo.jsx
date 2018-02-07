import React from 'react';

class Titulo extends React.Component {
    constructor(props){
        super(props);

        this.state = { hora: new Date() };
    }

    componentDidMount(){
        this.horaID = setInterval(
            () => this.atualizaSeg(),
            1000
        );
    }

    atualizaSeg(){
        this.setState({ hora: new Date() });
    }

    componentWillUnMount() {
        clearInterval(this.horaID);
    }

    render(){
        return (
            <div>
                <h1>Cartões animados com React</h1>
                <p>{ this.state.hora.toLocaleString() }</p>
            </div>

        );
    };
}

export default Titulo;