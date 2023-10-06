

function Disdisable() {
    var password = document.getElementById("contrasenya").value;
    document.getElementById("button").disabled = false;
    window.alert(password);
    if (password.length >= 8) {
        document.getElementById("carac").checked = true;
    }
    for (i = 0; i < password.length; i++) {
        lletra = password.charAt(i);
        if (lletra >= '0' && lletra <= '9') {
            document.getElementById("nume").checked = true;
        } else {
            if (lletra == lletra.toUpperCase()) {
                document.getElementById("maju").checked = true;
            }
        }
    } 
}

function Evaluacion(){

    
}