window.onload = function () {
    var c = document.getElementById("sssmc");
    var c_switch = false

    var c2 = document.getElementById("utsmc");
    var c2_switch = false

    var c3 = document.getElementById("pmsmc");
    var c3_switch = false

    var c4 = document.getElementById("sysmc");
    var c4_switch = false

    var c5 = document.getElementById("jsysmc");
    var c5_switch = false

    var c6 = document.getElementById("sgsmc");
    var c6_switch = false

    var c7 = document.getElementById("jhysmc");
    var c7_switch = false

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
        if (c2_switch == false) {
            c2.style.display = 'block';
            c2_switch = true;
        }
        else if (c2_switch == true) {
            c2.style.display = 'none'
            c2_switch = false;
        }
    });

    document.getElementById('ccc3').addEventListener('click', function () {
        if (c3_switch == false) {
            c3.style.display = 'block';
            c3_switch = true;
        }
        else if (c3_switch == true) {
            c3.style.display = 'none'
            c3_switch = false;
        }
    });

    document.getElementById('ccc4').addEventListener('click', function () {
        if (c4_switch == false) {
            c4.style.display = 'block';
            c4_switch = true;
        }
        else if (c4_switch == true) {
            c4.style.display = 'none'
            c4_switch = false;
        }
    });

    document.getElementById('ccc5').addEventListener('click', function () {
        if (c5_switch == false) {
            c5.style.display = 'block';
            c5_switch = true;
        }
        else if (c5_switch == true) {
            c5.style.display = 'none'
            c5_switch = false;
        }
    });

    document.getElementById('ccc6').addEventListener('click', function () {
        if (c6_switch == false) {
            c6.style.display = 'block';
            c6_switch = true;
        }
        else if (c6_switch == true) {
            c6.style.display = 'none'
            c6_switch = false;
        }
    });

    document.getElementById('ccc7').addEventListener('click', function () {
        if (c7_switch == false) {
            c7.style.display = 'block';
            c7_switch = true;
        }
        else if (c7_switch == true) {
            c7.style.display = 'none'
            c7_switch = false;
        }
    });

    // function get_argument(arg) {

    //     if (arg_switch == false) {
    //         arg.style.display = 'block';
    //         arg_switch = true;
    //     }
    //     else if (arg_switch == true) {
    //         arg.style.display = 'none';
    //         arg_switch = false;
    //     }
    // }
}
// document.querySelector('.circle1').addEventListener('click', function () {
//     document.querySelector('.SSSM').style.display = 'block'