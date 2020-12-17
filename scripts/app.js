const scrollSignEl = document.querySelector('#scroll-sign')
const overlayEl = document.querySelector('#overlay')
const projectsListEl = document.querySelector('#projects-list')
const projectsImageEl = document.querySelector('#projects-image')
const projectsTextEl = document.querySelector('#projects-about')
const projects = [
  {
    image: './images/project.png',
    text:
      "Web implementation of Rock, Paper and Scissors game. Fully responsive. Written with pure HTML, CSS and JS. Game is using Local Storage to save your score when you'll leave the site.",
  },
  {
    image: './images/project2.png',
    text:
      'A simple console simulation of RFID cards scanner with MQTT data transfer feature. Program has been written in Python 3 and batch for Internet of Things course at Wroclaw University of Science and Technology.',
  },
  {
    image: './images/project3.png',
    text:
      'Fully responsive buisness card website. Designed in Adobe XD. Written in HTML5, Sass with BEM metodology and JavaScript. Used mobile first approach',
  },
]

const changeScrollSignVisibility = () => {
  if (pageYOffset !== 0) scrollSignEl.classList.add('scroll-sign--hidden')
  else scrollSignEl.classList.remove('scroll-sign--hidden')
}

const changeOverlayVisibility = () => {
  if (pageYOffset === 0) overlayEl.classList.add('overlay--hidden')
  else overlayEl.classList.remove('overlay--hidden')
}

const changeProjectsImage = () => {
  let index = 0
  setInterval(() => {
    index = (index + 1) % projects.length
    projectsImageEl.src = projects[index].image
    projectsTextEl.textContent = projects[index].text
  }, 5000)
}

document.addEventListener('scroll', changeScrollSignVisibility)
document.addEventListener('scroll', changeOverlayVisibility)

changeProjectsImage()
