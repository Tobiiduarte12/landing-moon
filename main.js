const topBtn = document.getElementById("top");

const scroll = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
}

topBtn.addEventListener("click", scroll)
