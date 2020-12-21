window.onload = function () {
    var c = document.getElementById("sssmc");

    document.getElementById('ccc1').addEventListener('click', function () {
        // if (c.style.display == 'none') { c.style.display = 'block' }
        // else if (c.style.display == 'block') { c.style.display = 'none' }
        get_argument(c);
    })

    function get_argument(arg) {
        if (arg.style.display == 'none') { arg.style.display = 'block' }
        else if (arg.style.display = 'block') { arg.style.display == 'none' }
    }
}
// document.querySelector('.circle1').addEventListener('click', function () {
//     document.querySelector('.SSSM').style.display = 'block'