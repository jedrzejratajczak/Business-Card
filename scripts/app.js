const scrollSignEl = document.querySelector('#scroll-sign')
const overlayEl = document.querySelector('#overlay')

const changeScrollSignVisibility = () => {
  if (pageYOffset !== 0) scrollSignEl.classList.add('scroll-sign--hidden')
  else scrollSignEl.classList.remove('scroll-sign--hidden')
}

const changeOverlayVisibility = () => {
  if (pageYOffset === 0) overlayEl.classList.add('overlay--hidden')
  else overlayEl.classList.remove('overlay--hidden')
}

document.addEventListener('scroll', changeScrollSignVisibility)
document.addEventListener('scroll', changeOverlayVisibility)
