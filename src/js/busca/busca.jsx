import  React from 'react';

class Busca extends React.Component{
    constructor(props){
        super(props);

        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    atualizaBusca(evento){
        this.props.atualizaBusca(evento);
    }

    onSubmit(evento){
        this.props.onSubmit(evento);
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="input-fild col m6">
                    <input placeholder="Buscar..." onChange={this.atualizaBusca} type="text" value={this.props.busca}/>
                    <button>Buscar</button>
                </div>
            </form>
        );
    }
}

export default Busca;