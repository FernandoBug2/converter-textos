function TextoInverso () {
    let texto = '';
    let texto_invertido = '';

    texto = document.getElementById('texto').value;

    texto_invertido = texto.split('').reverse().join('');

    document.getElementById('texto').value = texto_invertido;
}

export default TextoInverso;