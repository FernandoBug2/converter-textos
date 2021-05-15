function TextoMaiusculo() {
    let texto = '';
    let texto_em_maiusculo = '';

    texto = document.getElementById('texto').value;
    
    texto_em_maiusculo = texto.toUpperCase();

    document.getElementById('texto').value =  texto_em_maiusculo;

}

export default TextoMaiusculo;