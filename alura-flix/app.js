function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    console.error("insira uma img .jpg")
  }
  document.getElementById("filme").value = ""
}

function listarFilmesNaTela(filme) {
  var titulo = document.getElementById("titulo").value

  var elementoFilmeFavorito =
    "<div class=boxFilme>" + "<img src=" + filme + ">" + "<p class=tituloFilme>" + titulo + "</p>" + "<ion-icon class=deleteIcon name=trash-sharp>" + "</ion-icon>" + "</div>"
  var elementoListaFilmes = document.getElementById("listaFilmes")
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito;
  var titulo = (document.getElementById("titulo").value = "")

  removerImg();
}

function removerImg() {
  var deleteIcon = document.querySelectorAll(".deleteIcon")
  var boxFilme = document.querySelectorAll(".boxFilme")

  deleteIcon.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.parentElement.remove()
    })
  })

  function showDeleteIcon(index) {
    deleteIcon[index].classList.add("active")
  }
  function hideDeleteIcon(index) {
    deleteIcon[index].classList.remove("active")
  }

  boxFilme.forEach((box, index) => {
    box.addEventListener("mouseenter", () => {
      showDeleteIcon(index)
    });

    box.addEventListener("mouseleave", () => {
      hideDeleteIcon(index)
    })
  })
}

/*let listaFilmes = ["https://cdn.awsli.com.br/600x700/1610/1610163/produto/68791564/poster-joker-coringa-b-c567873a.jpg", "https://ingresso-a.akamaihd.net/img/cinema/cartaz/9494-cartaz.jpg", "http://dicasdecinema.net/wp-content/uploads/2014/11/interstellar-poster.jpg"]

for (let i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">")
}*/