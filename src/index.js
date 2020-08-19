
const tabs = document.querySelectorAll(".c-tab");
const arrows = document.querySelectorAll(".tabs-arrow")

const checkArrows = () => {
  if (document.querySelector(".tab-a").classList.contains("active")) {
    console.log("disable top");
  }
}

tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    tabs.forEach((x) => {
      x.classList.remove("active");
    })
    event.currentTarget.classList.add("active");
    checkArrows()
  });
})

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (event) => {
    if (event.currentTarget.classList.contains("right")) {
      const active = document.querySelector(".c-tab.active");
      console.log(active)
      active.classList.remove("active");
      active.nextElementSibling.classList.add("active");
    }
    if (event.currentTarget.classList.contains("left")) {
      const active = document.querySelector(".c-tab.active");
      console.log(active)
      active.classList.remove("active");
      active.previousElementSibling.classList.add("active");
    }
   checkArrows()
  })
})



