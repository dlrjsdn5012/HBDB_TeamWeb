var currentContent = 0;
const right = document.getElementsByClassName("content-btn-right"); //오른쪽 버튼
const left = document.getElementsByClassName("content-btn-left"); //왼쪽 버튼


document.addEventListener('click', function (event) {
    if (event.target.matches('.content-btn-left')) {
        if (currentContent === 0){
            currentContent = 0;
        } else {
            currentContent -= 1;
        }
    } else if (event.target.matches('.content-btn-right')) {
        if (currentContent === 1){
            currentContent = 1;
        } else {
            currentContent += 1;
        }
    }
});

window.onload = function() {
    document.querySelector('content-right').addEventListener('click', function(){
        document.querySelector('.slide-container').style.transform = 'translate(0vw)'
    });

    document.querySelector('.slide-btn2').addEventListener('click', function(){
        document.querySelector('.slide-container').style.transform = 'translate(-100vw)'
    });

    document.querySelector('.slide-btn3').addEventListener('click', function(){
        document.querySelector('.slide-container').style.transform = 'translate(-200vw)'
    });
}