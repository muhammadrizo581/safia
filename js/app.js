
const headerEl = document.querySelector(".header")

window.addEventListener("scroll", ()=>{
    const offset = document.documentElement.scrollTop
    if(offset > 0){
        headerEl.classList.add("shrink")
    }else{
        headerEl.classList.remove("shrink")
    }
})