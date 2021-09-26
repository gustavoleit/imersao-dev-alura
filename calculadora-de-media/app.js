function media() {
  let primeiraNota = Number(document.querySelector('#n1').value)
  let segundaNota = Number(document.querySelector('#n2').value)
  let terceiraNota = Number(document.querySelector('#n3').value)
  let quartaNota = Number(document.querySelector('#n4').value)

  let ultimaNota = (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4
  let resultado = ultimaNota.toFixed(1)

  document.querySelector('.result').innerHTML = ' sua média é: ' + resultado
}