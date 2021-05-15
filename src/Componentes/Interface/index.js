import React from 'react';
import './style.css';
import TextoMaiusculo from '../Funcionalidade/TextoMaiusculo';
import TextoMinusculo from '../Funcionalidade/TextoMinúsculo';
import ApagarTexto from '../Funcionalidade/ApagarTexto';
import TextoInverso from '../Funcionalidade/TextoInverso';
import TextoTitulo from '../Funcionalidade/TextoTitulo';
import TituloInvertido from '../Funcionalidade/TituloInverso'


function InterFace() {
    return(
        <div id='conteudo'>
            <h1>Converter Case</h1>

            <p>
                Escreveu um texto com capslock ativo? <br />
                Aqui você pode deixar o texto do em maiúsculo, minúsculo, invertido entre outras coisas.
            </p>

            <textarea id='texto' placeholder='Escreva o texto aqui'></textarea>
  
            <div>
                <button onClick={TextoTitulo} >Titulo</button>
                <button onClick={TituloInvertido} >Titulo Invertido</button>
                <button onClick={TextoInverso} >Texto Invertido</button>
                <button onClick={TextoMaiusculo} >Texto Maiúsculo</button>
                <button onClick={TextoMinusculo} >Texto Minúsculo</button>
                <button onClick={ApagarTexto}>Apagar Tudo</button>
            </div>
            
        </div>
    )
}

export default InterFace;