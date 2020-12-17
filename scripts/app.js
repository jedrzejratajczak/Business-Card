const scrollSignEl = document.querySelector('#scroll-sign')
const overlayEl = document.querySelector('#overlay')
const projectsListEl = document.querySelector('#projects-list')
const projectsImageEl = document.querySelector('#projects-image')
const projectsTextEl = document.querySelector('#projects-about')
const contactBtn = document.querySelector('#contact-btn')
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

let intervalId = 0
let index = 0
const changeProject = evt => {
  clearInterval(intervalId)
  index = evt.currentTarget.dataset.projectId
  projectsImageEl.src = projects[index].image
  projectsTextEl.textContent = projects[index].text
}

const initProjectsSlideshow = () => {
  for (let listItem of projectsListEl.children) {
    listItem.addEventListener('mouseover', changeProject)
    listItem.addEventListener('mouseleave', initProjectsSlideshow)
  }
  intervalId = setInterval(() => {
    index = (index + 1) % projects.length
    projectsImageEl.src = projects[index].image
    projectsTextEl.textContent = projects[index].text
  }, 5000)
}

const showWarningModal = text => {
  const warningModalWrapper = document.createElement('div')
  warningModalWrapper.style = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
  `
  const warningModal = document.createElement('div')

  warningModal.style = `
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    top: 50%;
    left: 50%;
    width: 250px;
    height: 150px;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 10px;
  `
  warningModalWrapper.appendChild(warningModal)

  const textEl = document.createElement('p')
  textEl.textContent = text
  textEl.style = `
    color: #000;
    font-size: 1.5rem;
    text-align: center;
    box-sizing: border-box;
  `
  warningModal.appendChild(textEl)

  const closeButton = document.createElement('button')
  closeButton.textContent = 'Close'
  closeButton.style = `
    padding: 1em 1.5em;
    background-color: #ddd;
    font-size: 1.3rem;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 10px;
    background-color: #9948dd;
    color: #fff;
  `
  warningModal.appendChild(closeButton)
  closeButton.addEventListener('click', evt =>
    evt.currentTarget.parentNode.parentNode.remove()
  )

  document.body.appendChild(warningModalWrapper)
}

const sendMessage = evt => {
  evt.preventDefault()
  showWarningModal('The form is not supported yet.')
}

document.addEventListener('scroll', changeScrollSignVisibility)
document.addEventListener('scroll', changeOverlayVisibility)
contactBtn.addEventListener('click', sendMessage)

initProjectsSlideshow()
