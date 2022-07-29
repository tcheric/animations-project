console.log("page waiting...")

window.addEventListener("load", () => {
  setTimeout(() => {
    console.log("page loaded!")
    const preloader = document.querySelector("#preloader")
    const preloaderContent = document.querySelector("#loader-content")

    // Add class for CSS animations
    preloader.classList.add("preloader-anim")
    preloaderContent.classList.add("loader-content-anim")

    // Remove from DOM after animation
    setTimeout(() => {
      preloader.remove()
      document.body.classList.remove("scrollbar-hide")
  }, 800)
  }, 1000)

})