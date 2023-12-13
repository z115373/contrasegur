var base = 0;
var carac = false;
var nume = false;
var espe = false;
var maju = false;
var minus = false;
var comunes = ["123456", "12345678", "123456789", "qwerty", "contraseña"];
var patron = [/123/, /abc/, /qwerty/];

function readSingleFile(evt) {
    var f = evt.target.files[0];
    if (f) {
        var r = new FileReader();
        r.onload = function (e) {
            var contents = e.target.result;
            alert("Got the file.\n"
                    + "name: " + f.name + "\n"
                    + "type: " + f.type + "\n"
                    + "size: " + f.size + " bytes\n"
                    + "starts with: " + contents.substr(0, contents.indexOf("\n"))
                    );
            if (contents.substr(0, 1) === "/") {
                streamf1 = contents.replaceAll("\r\n", ",");
                streamf2 = streamf1.replaceAll("/", "");
                streamf3 = streamf1.split(",");
                for (i = 0; i < streamf2.length; i++) {
                    patron[i] = new RegExp(streamf3[i]);
                }
            } else {
                comunes = contents.replaceAll("\r\n", ",");
            }
        };
        r.readAsText(f);
    } else {
        alert("Failed to load file");
    }
}
function Show_password() {
    var x = document.getElementById("contrasenya");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
function Comunes() {
    contrasena = document.getElementById("contrasenya").value;
    if (comunes.includes(contrasena)) {
        return"-Massa comuna";
    }
    if (patron.some(pat => pat.test(contrasena))) {
        return"-Te patrons comuns";
    }
}
function Disdisable() {
    var password = document.getElementById("contrasenya").value;
    carac = false;
    nume = false;
    espe = false;
    maju = false;
    minus = false;
    document.getElementById("carac").checked = false;
    document.getElementById("nume").checked = false;
    document.getElementById("espe").checked = false;
    document.getElementById("maju").checked = false;
    document.getElementById("minus").checked = false;
    document.getElementById("button").disabled = false;
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
            if (lletra === lletra.toUpperCase() && lletra === lletra.toLowerCase()) {
                document.getElementById("espe").checked = true;
                espe = true;
            } else {
                if (lletra === lletra.toUpperCase()) {
                    document.getElementById("maju").checked = true;
                    maju = true;
                } else {
                    if (lletra === lletra.toLowerCase()) {
                        document.getElementById("minus").checked = true;
                        minus = true;
                    }
                }
            }
        }
    }
    base = 0;
    if (document.getElementById("nume").checked === true) {
        base = base + 10;
    }
    if (document.getElementById("espe").checked === true) {
        base = base + 41;
    }
    if (document.getElementById("maju").checked === true) {
        base = base + 40;
    }
    if (document.getElementById("minus").checked === true) {
        base = base + 40;
    }
    nivell = base ^ password.length / 16;
    document.getElementById("nivell").value = nivell.toString();
}

function Recomanacio() {
    if (minus === false || nume === false || maju === false) {
        return"-Tendria que tenir almenys una lletra majuscula, una minuscula, i un numero";
    }
    if (carac === false) {
        return"-Tendria que tenir almenys 8 caracters";
    }
    if (espe === false) {
        return"-Tendria que tenir almenys un caracter especial";
    }
    if (carac === true && espe === true && minus === true && nume === true && maju === true) {
        return"-Contrasenya Robusta!";
    }
}

function Evaluacion() {
    dificultat = 0;
    password = document.getElementById("contrasenya").value;
    user = document.getElementById("usuari").value;
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
    result = zxcvbn(document.getElementById("contrasenya").value);
    AnyProcessament = CostComputacional / (365 * 24 * 60 * 60);
    DiesProcessament = CostComputacional / (24 * 60 * 60);
    window.alert("Contrasenya: " + password + " \n\
    " + Comunes() + "\n\
    " + Recomanacio() + "\n\
    " + "-Tendria un cost computacional per força bruta de: " +
            CostComputacional.toExponential() +
            " pel que una maquina de 1 MIPS podria arrribar a necesitar " +
            AnyProcessament.toExponential() + " anys de processament, es a dir," +
            DiesProcessament.toExponential() + " dies." + " \n\
    " + "-Tendria un nivell de robustesa de: " + dificultat + "/4 i un zxcvbn score de: " +
            result.score + "/4");
    var obrir = window.confirm("¿Quieres que guardemos tu usuario y contraseña?");
    if (obrir === true) {
        localStorage.setItem("contrasena", password);
        localStorage.setItem("usuario", user);
        const myWindow = window.open("novaPes.html", "_blank", "width=460, height=600, left=0, \n\
    top=0, location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    }
}
