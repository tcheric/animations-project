// Menu Buttons
var belowAnim1 = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:18}, { duration: 0.15, y: 0 })

var aboveAnim1 = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:0}, { duration: 0.15, y: -18 })

var belowAnim2 = gsap.timeline({paused: true})
  .fromTo("#menu2", {y:18}, { duration: 0.15, y: 0 })

var aboveAnim2 = gsap.timeline({paused: true})
  .fromTo("#menu2", {y:0}, { duration: 0.15, y: -18 })


var belowAnim3 = gsap.timeline({paused: true})
  .fromTo("#menu3", {y:18}, { duration: 0.15, y: 0 })

var aboveAnim3 = gsap.timeline({paused: true})
  .fromTo("#menu3", {y:0}, { duration: 0.15, y: -18 })


var belowAnim4 = gsap.timeline({paused: true})
  .fromTo("#menu4", {y:18}, { duration: 0.15, y: 0 })

var aboveAnim4 = gsap.timeline({paused: true})
  .fromTo("#menu4", {y:0}, { duration: 0.15, y: -18 })


var belowAnim5 = gsap.timeline({paused: true})
  .fromTo("#menu5", {y:18}, { duration: 0.15, y: 0 })

var aboveAnim5 = gsap.timeline({paused: true})
  .fromTo("#menu5", {y:0}, { duration: 0.15, y: -18 })
  
var lock1 = 0
var lock2 = 0
var lock3 = 0
var lock4 = 0
var lock5 = 0

document.querySelector("#m1-link").addEventListener("mouseenter", (e) => {
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
})

document.querySelector("#m2-link").addEventListener("mouseenter", (e) => {
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
})

document.querySelector("#m3-link").addEventListener("mouseenter", (e) => {
  console.log("RUN ONCE")
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
})

document.querySelector("#m4-link").addEventListener("mouseenter", (e) => {
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
})

document.querySelector("#m5-link").addEventListener("mouseenter", (e) => {
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
})

