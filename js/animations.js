// Menu Buttons
var belowAnim = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:18}, { duration: 0.2, y: 0 })

var aboveAnim = gsap.timeline({paused: true})
  .fromTo("#menu1", {y:0}, { duration: 0.2, y: -18 })

var lock = 0
document.querySelector("#m1-link").addEventListener("mouseenter", (e) => {
  console.log("RUN ONCE")
  if (lock == 1) {
    return
  }
  lock = 1
  aboveAnim.play()
  setTimeout(()=>{
    belowAnim.play()
    setTimeout(()=>{
      belowAnim.pause(0)
      aboveAnim.pause(0)
      lock = 0
    }, 200)
  }, 200)
})

