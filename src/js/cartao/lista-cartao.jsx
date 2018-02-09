import React from 'react';
import Cartao from "./cartao";
import Busca from '../busca/busca';

class ListaCartao extends React.Component {
    constructor(props){
        super(props);

        this.state = { cliques: 0, busca: '', dados: '', servidor: '' };
        this.addClick = this.addClick.bind(this);
        this.atualizaBusca = this.atualizaBusca.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    addClick(){
        // this.setState({ cliques: this.state.cliques + 1 });
        this.setState((prevState)=>({
            cliques: prevState.cliques + 1
        }));
    }

    atualizaBusca(evento){
        this.setState({ busca: evento.target.value });
        if (evento.target.value === ''){
            this.setState({ dados: this.state.servidor })
        }
    }

    onSubmit(evento){
        evento.preventDefault();
        let busca = this.state.busca;
        let dados = this.state.servidor;
        let novaLista = dados.filter((item) => {
            if(item.titulo.toUpperCase().indexOf(busca.toUpperCase()) > -1
            || item.descricao.toUpperCase().indexOf(busca.toUpperCase()) > -1
            || item.detalhes.toUpperCase().indexOf(busca.toUpperCase()) > -1){
                return item;
            }
        });
        this.setState({ dados: novaLista })
    }

    componentDidMount(){
        this.setState({
       dados: [
        { titulo: 'Titulo 1', descricao: 'Descrição do cartão 01', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 2', descricao: 'Descrição do cartão 02', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 3', descricao: 'Descrição do cartão 03', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 4', descricao: 'Descrição do cartão 04', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 5', descricao: 'Descrição do cartão 05', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 6', descricao: 'Descrição do cartão 06', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 7', descricao: 'Descrição do cartão 07', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 8', descricao: 'Descrição do cartão 08', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 9', descricao: 'Descrição do cartão 09', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 10', descricao: 'Descrição do cartão 10', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' }
    ], servidor: [
        { titulo: 'Titulo 1', descricao: 'Descrição do cartão 01', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 2', descricao: 'Descrição do cartão 02', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 3', descricao: 'Descrição do cartão 03', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 4', descricao: 'Descrição do cartão 04', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 5', descricao: 'Descrição do cartão 05', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 6', descricao: 'Descrição do cartão 06', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 7', descricao: 'Descrição do cartão 07', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 8', descricao: 'Descrição do cartão 08', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 9', descricao: 'Descrição do cartão 09', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
        { titulo: 'Titulo 10', descricao: 'Descrição do cartão 10', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' }
            ]

        });
    }

    render(){

        let noticias = this.state.dados;

        let aux = [];
        let novaLista = [];
        for(let k = 0; k < noticias.length; k++){
            aux.push(noticias[k]);
            if(aux.length === this.props.qtdLinha) {
                novaLista.push(aux);
                aux = [];
            } else if (k === noticias.length - 1) {
                novaLista.push(aux);
            }
        }

        let tamanhoCol = "col m" + this.props.tamanhoCol;
        let listaCartao = function (grupo, self) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} addClick={self.addClick}/>
                    </div>
                );
            });
        };
        let self = this;
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartao(grupo, self)}
                </div>
            );
        });
        return (
            <div>
                <div className="row">
                    <Busca atualizaBusca={this.atualizaBusca} busca={this.state.busca} onSubmit={this.onSubmit}/>
                </div>
                <div>
                    <p>Quantidade de cliques: {this.state.cliques}</p>
                    {linha}
                </div>
            </div>

        );
    };
}

export default ListaCartao;