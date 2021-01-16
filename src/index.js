import "./styles/style.scss"

const hello = document.querySelector('#hello')
const world = document.querySelector('#world')

window.addEventListener('scroll', (e) => {
  scrollEvent(hello)
  scrollEvent(world)
})

function scrollEvent(element) {
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.pageYOffset;

  const enter = scrollPosition > element.offsetTop - (viewportHeight * 0.5);
  if (enter) {
    console.log(true)
    triggerTransition(element, true)
  }

  const out = scrollPosition < element.offsetTop - (viewportHeight);

  if (out) {
    console.log(false)
    triggerTransition(element, false)
  }
}

function triggerTransition(viewport, condition) {
  console.log('called')
  const target = viewport.querySelectorAll('.slide-in')

  if (condition) {
    target[0].classList.add('fade')

    target[0].addEventListener('transitionend', () => {
      target[1].classList.add('fade')

      target[1].addEventListener('transitionend', () => {
        target[2].classList.add('fade')
      })
    })
  }
  else {
    target.forEach(e => {
      e.classList.remove('fade')
    })
  }
}
