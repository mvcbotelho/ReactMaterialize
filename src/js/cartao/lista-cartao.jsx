import React from 'react';
import Cartao from "./cartao";

class ListaCartao extends React.Component {
    render(){
        let noticias = [
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
        ];

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
        let listaCartao = function (grupo) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className={tamanhoCol}>
                        <Cartao dados={item} />
                    </div>
                );
            });
        };
        let linha = novaLista.map(function (grupo, index) {
            return (
                <div key={index} className="row">
                    {listaCartao(grupo)}
                </div>
            );
        });
        console.log(novaLista);
        return (
            <div>
                {linha}
            </div>

        );
    };
}

export default ListaCartao;