const model = document.querySelector('.model');
const previews = document.querySelectorAll('.gallery img');
const original = document.querySelector(".full-img");
const imgText = document.querySelector('.caption');

previews.forEach((preview) => {
    previews.addEventListener('click', () => {
        model.classList.add("open");
    })
})