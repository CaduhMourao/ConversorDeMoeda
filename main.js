function Converter() {
    var valorDoProduto = document.getElementById("valor").value;
    var valorEmReal = valorDoProduto * 5;
    document.querySelector('#valorConvertido').innerHTML = `O valor do produto em real é: r$${valorEmReal}`;
}