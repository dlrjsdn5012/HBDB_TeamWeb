window.onload = function () {
    var c = document.getElementById("sssmc");
    var c_switch = false

    var c2 = document.getElementById("utsmc");

    document.getElementById('ccc1').addEventListener('click', function () {

        if (c_switch == false) {
            c.style.display = 'block';
            c_switch = true;
        }
        else if (c_switch == true) {
            c.style.display = 'none'
            c_switch = false;
        }
    });

    document.getElementById('ccc2').addEventListener('click', function () {
        get_argument(c2);
    });

    function get_argument(arg) {

        if (arg_switch == false) {
            arg.style.display = 'block';
            arg_switch = true;
        }
        else if (arg_switch == true) {
            arg.style.display = 'none';
            arg_switch = false;
        }
    }
}
// document.querySelector('.circle1').addEventListener('click', function () {
//     document.querySelector('.SSSM').style.display = 'block'