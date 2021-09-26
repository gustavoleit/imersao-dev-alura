function Converter() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmReal = parseFloat(valor)

  var valorEmBitcoin = valorEmReal * 0.0000041

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O resultado em bitcoins é ' + valorEmBitcoin.toFixed(8)
  elementoValorConvertido.innerHTML = valorConvertido
}

function Resetar() {
  document.getElementById('valor').value = ''
  document.getElementById('valorConvertido').innerHTML = ''
}

/*
function Converter() {
  let valorElemento = document.getElementById("valor")
  let valor = valorElemento.value
  let valorEmDolarNumerico = parseFloat(valor)

  let valorEmReal = valorEmDolarNumerico * 5

  let elementoValorConvertido = document.getElementById("valorConvertido")
  let valorConvertido = "o resultado em real é R$ " + valorEmReal.toFixed(1)
  elementoValorConvertido.innerHTML = valorConvertido
}
*/
