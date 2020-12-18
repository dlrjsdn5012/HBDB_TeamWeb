const model = document.querySelector(".model");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full_img");
const imgText = document.querySelector(".caption");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        model.classList.add("open");
        original.classList.add("open");
        //dynamic change text and image
        const originalSrc = previews.getAttribute("data-original");
        original.src = `./full/${originalSrc}`

    });
});


model.addEventListener('click', (e) => {
    if (e.target.classList.contains('model')) {
        model.classList.remove('open');
        model.classList.remove('open');
    }
});