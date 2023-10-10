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
    }
    for (i = 0; i < password.length; i++) {
        lletra = password.charAt(i);
        if (lletra >= '0' && lletra <= '9') {
            document.getElementById("nume").checked = true;
        } else {
            if (lletra == lletra.toUpperCase()&& lletra == lletra.toLowerCase()) {
                document.getElementById("espe").checked = true;
            } else {
                if (lletra == lletra.toUpperCase()) {
                    document.getElementById("maju").checked = true;
                } else {
                    if (lletra == lletra.toLowerCase()) {
                        document.getElementById("minus").checked = true;
                    } 
                }
            }
        }
    }
    base=0;
    if(document.getElementById("nume").checked == true){base=base+10;}
    if(document.getElementById("espe").checked == true){base=base+41;}
    if(document.getElementById("maju").checked == true){base=base+40;}
    if(document.getElementById("minus").checked == true){base=base+40;}
    nivell=base^password.length/16;
    window.alert(nivell);
    document.getElementById("nivell").value=nivell.toString();
    }
function Evaluacion() {


}
