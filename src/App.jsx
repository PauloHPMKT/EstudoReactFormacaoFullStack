import React from 'react';
import Header from './Header';
import Content from './Content';
import Card from './Card';
import Cards from './Cards';

function App() {

    const urlImg = 'https://via.placeholder.com/150'

    return (
        <>
            <Header titulo="HELLO WORLD" subtitulo="outro texto" />
            <Content titulo="Bem-vindo" >
                <p>Este é um paragrafo de teste</p>
                <Cards>
                    <Card 
                        imagem={urlImg} 
                        titulo="Título 1" 
                        texto="Esse texto preenche o card para um teste"
                    />
                    <Card 
                        imagem={urlImg} 
                        titulo="Título 2" 
                        texto="Esse texto preenche o card para um teste"
                    />
                    <Card 
                        imagem={urlImg} 
                        titulo="Título 3" 
                        texto="Esse texto preenche o card para um teste"
                    />
                </Cards>
                
            </Content>
        </>
    )
}

export default App