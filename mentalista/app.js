let numeroSecreto = parseInt(Math.random() * 11)

function Chutar() {
  let elementoResultado = document.getElementById('resultado')
  let chute = parseInt(document.getElementById('valor').value)
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou!'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Chute números entre 0 e 10'
  } else {
    elementoResultado.innerHTML = 'Você errou!'
  }
}

function Sortear() {
  document.getElementById('valor').value = ''
  document.getElementById('resultado').innerHTML = ''
  numeroSecreto = parseInt(Math.random() * 11)
  document.getElementById('chute').disabled = false
}
