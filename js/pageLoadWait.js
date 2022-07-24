console.log("page waiting...")

window.addEventListener("load", () => {
  setTimeout(() => {
    console.log("page loaded!")
    const preloader = document.querySelector("#preloader")
    const preloaderContent = document.querySelector("#loader-content")

    // Add class for CSS animations
    preloader.classList.add("loaded")
    preloaderContent.classList.add("loaded-content")

    // Remove from DOM after animation
    setTimeout(() => {
      preloader.remove()
    }, 800)
  }, 1000)

})