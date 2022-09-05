// Menu Buttons
const belowAnim1 = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:18}, { duration: 0.15, y: 0 })

const aboveAnim1 = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:0}, { duration: 0.15, y: -18 })

const belowAnim2 = gsap.timeline({paused: true})
  .fromTo("#menu2", {y:18}, { duration: 0.15, y: 0 })

const aboveAnim2 = gsap.timeline({paused: true})
  .fromTo("#menu2", {y:0}, { duration: 0.15, y: -18 })

const belowAnim3 = gsap.timeline({paused: true})
  .fromTo("#menu3", {y:18}, { duration: 0.15, y: 0 })

const aboveAnim3 = gsap.timeline({paused: true})
  .fromTo("#menu3", {y:0}, { duration: 0.15, y: -18 })

const belowAnim4 = gsap.timeline({paused: true})
  .fromTo("#menu4", {y:18}, { duration: 0.15, y: 0 })

const aboveAnim4 = gsap.timeline({paused: true})
  .fromTo("#menu4", {y:0}, { duration: 0.15, y: -18 })

const belowAnim5 = gsap.timeline({paused: true})
  .fromTo("#menu5", {y:18}, { duration: 0.15, y: 0 })

const aboveAnim5 = gsap.timeline({paused: true})
  .fromTo("#menu5", {y:0}, { duration: 0.15, y: -18 })
  
let lock1 = 0
let lock2 = 0
let lock3 = 0
let lock4 = 0
let lock5 = 0

let m1Link = document.querySelector("#m1-link")
let m2Link = document.querySelector("#m2-link")
let m3Link = document.querySelector("#m3-link")
let m4Link = document.querySelector("#m4-link")
let m5Link = document.querySelector("#m5-link")
let menuContainer = document.querySelector("#menu")

const linkArray = [m1Link, m2Link, m3Link, m4Link, m5Link]

const addFadeClasses = (currLink) => {
  for (var menulink of linkArray) {
    if (!menulink.classList.contains("fade")) {
      menulink.classList.add("fade")
    }
  }
  currLink.classList.remove("fade")
}


const removeFadeClasses = () => {
  for (var menulink of linkArray) {
    menulink.classList.remove("fade")
  }
}


m1Link.addEventListener("mouseenter", (e) => {
  if (lock1 == 1) {
    return
  }
  lock1 = 1
  aboveAnim1.play()
  setTimeout(()=>{
    belowAnim1.play()
    setTimeout(()=>{
      belowAnim1.pause(0)
      aboveAnim1.pause(0)
      lock1 = 0
    }, 150)
  }, 150)
  addFadeClasses(m1Link)
})

m2Link.addEventListener("mouseenter", (e) => {
  if (lock2 == 1) {
    return
  }
  lock2 = 1
  aboveAnim2.play()
  setTimeout(()=>{
    belowAnim2.play()
    setTimeout(()=>{
      belowAnim2.pause(0)
      aboveAnim2.pause(0)
      lock2 = 0
    }, 150)
  }, 150)
  addFadeClasses(m2Link)
})

m3Link.addEventListener("mouseenter", (e) => {
  if (lock3 == 1) {
    return
  }
  lock3 = 1
  aboveAnim3.play()
  setTimeout(()=>{
    belowAnim3.play()
    setTimeout(()=>{
      belowAnim3.pause(0)
      aboveAnim3.pause(0)
      lock3 = 0
    }, 150)
  }, 150)
  addFadeClasses(m3Link)
})

m4Link.addEventListener("mouseenter", (e) => {
  if (lock4 == 1) {
    return
  }
  lock4 = 1
  aboveAnim4.play()
  setTimeout(()=>{
    belowAnim4.play()
    setTimeout(()=>{
      belowAnim4.pause(0)
      aboveAnim4.pause(0)
      lock4 = 0
    }, 150)
  }, 150)
  addFadeClasses(m4Link)
})

m5Link.addEventListener("mouseenter", (e) => {
  if (lock5 == 1) {
    return
  }
  lock5 = 1
  aboveAnim5.play()
  setTimeout(()=>{
    belowAnim5.play()
    setTimeout(()=>{
      belowAnim5.pause(0)
      aboveAnim5.pause(0)
      lock5 = 0
    }, 150)
  }, 150)
  addFadeClasses(m5Link)
})

menuContainer.addEventListener("mouseleave", (e) => {removeFadeClasses()})