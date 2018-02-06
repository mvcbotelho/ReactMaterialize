import React from 'react';
import Cartao from "./cartao";

class ListaCartao extends React.Component {
    render(){
        let noticias = [
            { titulo: 'Titulo 1', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 2', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 3', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 4', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 5', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 6', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 7', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 8', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 9', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' },
            { titulo: 'Titulo 10', descricao: 'Descrição', detalhes: 'Detalhes', imagem: 'http://materializecss.com/images/office.jpg', link: '#' }
        ];

        let aux = [];
        let novaLista = [];
        for(let k = 0; k < noticias.length; k++){
            aux.push(noticias[k]);
            if(aux.length === 4) {
                novaLista.push(aux);
                aux = [];
            } else if (k === noticias.length - 1) {
                novaLista.push(aux);
            }
        }
        let listaCartao = function (grupo) {
            return grupo.map(function (item, index) {
                return (
                    <div key={index} className="col m3">
                        <Cartao />
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