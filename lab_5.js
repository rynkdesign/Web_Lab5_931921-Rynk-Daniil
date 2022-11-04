const modal = document.querySelector(".modal");
const modal_heading = modal.querySelector(".modal_content h1");
const modal_text = modal.querySelector(".modal_content div");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.onclick = () => {
        modal.style.display = "block";
        modal_heading.innerText = button.parentElement.querySelector("h1").innerText;
        modal_text.innerHTML = button.parentElement.querySelector(".news_text").innerHTML;
    }
})

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}