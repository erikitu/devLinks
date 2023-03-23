function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  
  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/profileLight.png')
    img.setAttribute('alt', 'Imagem de Eric com camiseta preta')
  } else {
    img.setAttribute('src', './assets/profileDark.jpg')
    img.setAttribute('alt', 'Imagem de Eric usando óculos escuros')
  }
}