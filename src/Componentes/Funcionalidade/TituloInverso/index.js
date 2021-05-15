function TituloInvertido() {
    let texto = '';
    let PrimeiraLetra = '';
    let RestoDoTexto = '';

    texto = document.getElementById('texto').value;

    PrimeiraLetra = texto[0];
    RestoDoTexto = texto.substr(1)
    
    document.getElementById('texto').value = PrimeiraLetra.toLowerCase() + RestoDoTexto.toUpperCase();
}

export default TituloInvertido;