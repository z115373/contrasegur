
var base = 0;
var carac = false;
var nume = false;
var espe = false;
var maju = false;
var minus = false;
function Disdisable() {
    var password = document.getElementById("contrasenya").value;
    document.getElementById("carac").checked = false;
    document.getElementById("nume").checked = false;
    document.getElementById("espe").checked = false;
    document.getElementById("maju").checked = false;
    document.getElementById("minus").checked = false;
    document.getElementById("button").disabled = false;
    window.alert(password);
    if (password.length >= 8) {
        document.getElementById("carac").checked = true;
        carac = true;
    }
    for (i = 0; i < password.length; i++) {
        lletra = password.charAt(i);
        if (lletra >= '0' && lletra <= '9') {
            document.getElementById("nume").checked = true;
            nume = true;
        } else {
            if (lletra == lletra.toUpperCase() && lletra == lletra.toLowerCase()) {
                document.getElementById("espe").checked = true;
                espe = true;
            } else {
                if (lletra == lletra.toUpperCase()) {
                    document.getElementById("maju").checked = true;
                    maju = true;
                } else {
                    if (lletra == lletra.toLowerCase()) {
                        document.getElementById("minus").checked = true;
                        minus = true;
                    }
                }
            }
        }
    }
    base = 0;
    if (document.getElementById("nume").checked == true) {
        base = base + 10;
    }
    if (document.getElementById("espe").checked == true) {
        base = base + 41;
    }
    if (document.getElementById("maju").checked == true) {
        base = base + 40;
    }
    if (document.getElementById("minus").checked == true) {
        base = base + 40;
    }
    nivell = base ^ password.length / 16;
    window.alert(nivell);
    document.getElementById("nivell").value = nivell.toString();
}

function Evaluacion() {
    dificultat = 0;
    password = document.getElementById("contrasenya").value;
    window.alert(base + " " + password.length);
    CostComputacional = Math.pow(base, password.length) / 10e6;
    if (CostComputacional < 10e3) {
        dificultat = 0;
    } else {
        if (CostComputacional < 10e6) {
            dificultat = 1;
        } else {
            if (CostComputacional < 10e8) {
                dificultat = 2;
            } else {
                if (CostComputacional < 10e10) {
                    dificultat = 3;
                } else {
                    dificultat = 4;
                }
            }
        }
    }
    AnyProcessament = CostComputacional / (365 * 24 * 60 * 60);
    DiesProcessament = CostComputacional / (24 * 60 * 60);
    window.alert(password +
            "-Tendria un cost computacional per força bruta de: " +
            CostComputacional.toExponential() +
            " pel que una maquina de 1 MIPS podria arrribar a necesitar " +
            AnyProcessament.toExponential() + " anys de processament, es a dir," +
            DiesProcessament.toExponential() + " dies.");
}
