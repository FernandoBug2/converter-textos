function TextoMinusculo() {
    let texto = '';
    let texto_em_minusculo = '';

    texto = document.getElementById('texto').value;

    texto_em_minusculo = texto.toLowerCase();

    document.getElementById('texto').value = texto_em_minusculo;
}

export default TextoMinusculo;