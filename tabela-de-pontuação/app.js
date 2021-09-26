let participante = {
  nome: 'participante',
  vitorias: 1,
  empates: 2,
  derrotas: 2,
  pontos: 0
}

let participanteDois = {
  nome: 'participante dois',
  vitorias: 2,
  empates: 2,
  derrotas: 3,
  pontos: 0
}

function calculaPontos(jogador) {
  let pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}

participante.pontos = calculaPontos(participante)
participanteDois.pontos = calculaPontos(participanteDois)

let jogadores = [participante, participanteDois]

function exibeJogadoresNaTela(jogadores) {
  let elemento = ''
  for (let i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>'
    elemento += '<td>' + jogadores[i].vitorias + '</td>'
    elemento += '<td>' + jogadores[i].empates + '</td>'
    elemento += '<td>' + jogadores[i].derrotas + '</td>'
    elemento += '<td>' + jogadores[i].pontos + '</td>'
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += '</tr>'
  }
  let tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
  let jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  let jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  let jogador = jogadores[i]
  jogador.derrotas++
  exibeJogadoresNaTela(jogadores)
}

function Resetar() {
  for (i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0
    jogadores[i].derrotas = 0
    jogadores[i].empates = 0
    jogadores[i].pontos = 0
  }
  exibeJogadoresNaTela(jogadores)
}
