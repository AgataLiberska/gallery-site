const sections = [...document.querySelectorAll("main section")].map(
  (el) => el.id
)
const bodyEl = document.querySelector("body")

let waiting = false

let lastKnownScrollPosition = 0
let ticking = false

function updateBackground(scrollPos) {
  const headerHeight = window.innerWidth >= 992 ? 0 : 66
  const sectionNumber = Math.round(
    (scrollPos + headerHeight) / window.innerHeight
  )
  bodyEl.style.backgroundColor = `var(--${sections[sectionNumber]})`
}

document.addEventListener("scroll", function (e) {
  lastKnownScrollPosition = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function () {
      updateBackground(lastKnownScrollPosition)
      ticking = false
    })

    ticking = true
  }
})
