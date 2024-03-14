const Idiomes_dft = [
    {
        "IdIdioma": "ca",
        "Titol": "- Contrasenyes Segures",
        "Username": "Usuari o correu:",
        "Password": "Contrasenya:",
        "Mostrar": "Mostrar Contrasenya:",
        "Minimcar": " Mínim 8 caràcters,",        
        "Majuscula": " almenys una lletra majúscula,",
        "Minuscula": " almenys una lletra minúscula,",
        "Numero": " almenys un número,",
        "Carespecial": " almenys un carácter especial.",
        "Robustesa": "Dèbil - Regular - Bona - Forta",
        "Inisessio": "Iniciar sessió",
        "Massacomu": "La contrasenya és massa comuna. Si us plau, tria una contrasenya més forta.",
        "Nopatrons": "La contrasenya no pot contenir patrons previsibles.",
        "Norepmult": "La contrasenya no pot contenir repeticions múltiples de caràcters.",
        "Majminnum": "La contrasenya ha de contenir almenys una lletra majúscula, una minúscula i un número.",
        "Almcaresp": "La contrasenya ha de contenir almenys un caràcter especial.",
        "Almmincar": "La contrasenya és massa curta. Ha de tenir almenys 8 caràcters.",
        "Contrarob": "Contrasenya robusta!",        
        "Computacional": "\n\     - Tendria un Cost Computacional per Força Bruta de: ",
        "Maquina": " pel que una màquina a 1 MIPS podria arribar a necessitar ",
        "Processament": " anys de processament, es a dir, ",
        "Nivell": " dies.\n\     - Tendria un Nivell de Robustesa de: ",
        "Score": "/4, i un zxcvbn Score de: ",
        "Voldesar": "Vol desar l'inici de sessió?"
    },
    {
        "IdIdioma": "es",
        "Titol": "Versión con Base de Datos Contraseñas Seguras",
        "Username": "Usuario o correo: ",
        "Password": "Contraseña: ",
        "Mostrar": "Mostrar: ",
        "Minimcar": "Mínimo 8 carácteres,",
        "Majuscula": "almenos una letra mayúscula,",
        "Minuscula": "almenos una letra minúscula,",
        "Numero": "almenos un número,",
        "Carespecial": "almenos un carácter especial.",
        "Robustesa": "Débil - Regular - Buena - Fuerte",
        "Inisessio": "Iniciar sesión",
        "Massacomu": "La contraseña es demasiado común. Por favor, elige una contraseña más fuerte.",
        "Nopatrons": "La contraseña no puede contener patrones previsibles.",
        "Norepmult": "La contraseña no puede contener múltiples repeticiones de caracteres.",
        "Majminnum": "La contraseña debe contener al menos una letra mayúscula, una minúscula y un número.",
        "Almcaresp": "La contraseña debe contener al menos un carácter especial.",
        "Almmincar": "La contraseña es demasiado corta. Debe tener al menos 8 caracteres.",
        "Contrarob": "¡Contraseña robusta!",
        "Computacional": "\n\     - Tendría un Coste Computacional por Fuerza Bruta de: ",
        "Maquina": "por lo que una máquina a 1 MIPS podría llegar a necesitar ",
        "Processament": "años de procesamiento, es decir, ",
        "Nivell": "días.\n\     - Tendría un Nivel de Robustez de: ",
        "Score": "/4, y un zxcvbn Score de: ",
        "Voldesar": "¿Quiere guardar el inicio de sesión?"
    },
    {
        "IdIdioma": "en",
        "Titol": "Secure Passwords Database Version",
        "Username": "User or email: ",
        "Password": "Password: ",
        "Mostrar": "Show: ",
        "Minimcar": "Minimum 8 characters,",
        "Majuscula": "at least one capital letter,",
        "Minuscula": "at least one lowercase letter,",
        "Numero": "at least one number,",
        "Carespecial": "at least one special character.",
        "Robustesa": "Weak - Fair - Good - Strong",
        "Inisessio": "Log in",
        "Massacomu": "The password is too common. Please choose a stronger password.",
        "Nopatrons": "Password cannot contain predictable patterns.",
        "Norepmult": "The password cannot contain multiple repetitions of characters.",
        "Majminnum": "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        "Almcaresp": "Password must contain at least one special character.",
        "Almmincar": "The password is too short. It must be at least 8 characters long.",
        "Contrarob": "Strong password!",
        "Computacional": "\n\     - It would have a Brute Force Computational Cost of: ",
        "Maquina": "for what a 1 MIPS machine might need ",
        "Processament": "years of processing, that is, ",
        "Nivell": "days.\n\     - It would have a Robustness Level of: ",
        "Score": "/4, and a zxcvbn Score of: ",
        "Voldesar": "Do you want to save your login?"
    }];
var idiomas = Idiomes_dft;
var idioma = idiomas.find(idioma => idioma.IdIdioma === "ca");

var base = 0;
var carac = false;
var nume = false;
var espe = false;
var maju = false;
var minus = false;
var comunes = ["123456", "12345678", "123456789", "qwerty", "contraseña"];
var patron = [/123/, /abc/, /qwerty/];
var diccionario=new Set([]);

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
                //alert(diccionario);
                diccionarioSp = contents.split("\r\n");
                diccionarioSp2 = contents.split("\n");
                for (i = 0; i < diccionarioSp2.length; i++) {
                    diccionario.add(diccionarioSp2[i]);
                }
                //alert(diccionario);
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

//Comprovam si la contrasenya te patrons o es comuna
function Comunes() {
    contrasena = document.getElementById("contrasenya").value;
    if (diccionario.has(contrasena)) {
        return idioma.Massacomu;
    }
    if (patron.some(pat => pat.test(contrasena))) {
        return idioma.Nopatrons;
    }
    return "";
}

//Amb aquesta funció fem possible uasr el botó d'inici de sesió i marca els checkbox que necesitem marcar
function Activar() {
    password = document.getElementById("contrasenya").value;
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
    document.getElementById("Inisessio").disabled = false;
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
        return idioma.Majminnum;
    }
    if (carac === false) {
        return idioma.Almmincar;
    }
    if (espe === false) {
        return idioma.Almcaresp;
    }
    if (carac === true && espe === true && minus === true && nume === true && maju === true) {
        return idioma.Contrarob;
    }
}

function printdata(res){
    for (var i in res){
        for (var j in res[i]){
            window.alert(res[i][j]);
        }
    }
}

function traduccio(IdIdioma, res){
 //alert(idiomas[0].Titol);
 idiomas = res;
 //alert(idiomas[0].Titol); 
 idioma = idiomas.find(idioma => idioma.IdIdioma === IdIdioma);
  //alert(idioma.IdIdioma);
 document.getElementById("Username").innerHTML = idioma.Username;
 document.getElementById("Password").innerHTML = idioma.Password;
 document.getElementById("Mostrar").innerHTML = idioma.Mostrar;
 document.getElementById("Minimcar").innerHTML = idioma.Minimcar;
 document.getElementById("Majuscula").innerHTML = idioma.Majuscula;
 document.getElementById("Minuscula").innerHTML = idioma.Minuscula;
 document.getElementById("Numero").innerHTML = idioma.Numero;
 document.getElementById("Carespecial").innerHTML = idioma.Carespecial;
 document.getElementById("Robustesa").innerHTML = idioma.Robustesa;
 document.getElementById("Inisessio").innerHTML = idioma.Inisessio;
}

function sql_diccionariUpdate(IdIdioma, res){
    const mywindow = window.open("", "_blank", "width=460, height=600, left=0, \n\
        top=0, location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
        mywindow.document.open();
        mywindow.document.write("<html><body>");
        mywindow.document.write('<a target="_blank" href="https://sqlitesudio.netlify.app/">' + "SQL UPDATE TblDiccionari for SQLite Sudio IdIdioma=" + '"'+ IdIdioma +'"' + "</a>");
        for (var i in res){
           //alert(res[i].Contrasenyes);         
            mywindow.document.write("<p><div>" + "UPDATE TblContrasenyes" + "</div>");
            mywindow.document.write("<div>" + "SET MD5 = " + '"' + MD5(res[i].Contrasenyes) + '"' + "," + "</div>");
            mywindow.document.write("<div>" + "SHA1 = " + '"' + SHA1(res[i].Contrasenyes) + '"' + "</div>");
            mywindow.document.write("<div>" + "WHERE Contrasenyes =" + '"' + res[i].Contrasenyes + '"' + ";" + "</div></p>");        
        }
        diccionario.forEach(function(password){
            //diccionario.add(password);
            mywindow.document.write("<p><div>" + "UPDATE TblContrasenyes" + "</div>");
            mywindow.document.write("<div>" + "SET MD5 = " + '"' + MD5(password) + '"' + "," + "</div>");
            mywindow.document.write("<div>" + "SHA1 = " + '"' + SHA1(password) + '"' + "</div>");
            mywindow.document.write("<div>" + "WHERE Contrasenyes =" + '"' + password + '"' + ";" + "</div></p>");        
        });
        mywindow.document.write("</body></html>");
        mywindow.document.close();
}

function sql_diccionariInsert(IdIdioma){
    
    const mywindow = window.open("", "_blank", "width=460, height=600, left=0, \n\
        top=0, location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
        mywindow.document.open();
        mywindow.document.write("<html><body>");
        mywindow.document.write('<a target="_blank" href="https://sqlitesudio.netlify.app/">' + "SQL INSERT TblDiccionari for SQLite Sudio IdIdioma=" + '"'+ idioma.IdIdioma +'"' + "</a>");
        diccionario.forEach(function(password){
            //diccionario.add(password);
            mywindow.document.write("<p>" + "INSERT INTO TblContrasenyes (Contrasenyes, IdIdioma, MD5, SHA1)\n\
            VALUES(" + '"' + password + '",' + '"' + IdIdioma+ '",'
            + '"' + MD5(password) + '",' + '"' + SHA1(password) + '");' + "</p>");
        });
        mywindow.document.write("</body></html>");
        mywindow.document.close();
}

function Update(IdIdioma){
    alasql('ATTACH SQLITE DATABASE Contrasegur("Contrasegur.db"); USE Contrasegur; \n\
          SELECT Contrasenyes, IdIdioma FROM TblContrasenyes WHERE IdIdioma IS NULL OR IdIdioma="" OR IdIdioma="'+ IdIdioma +'";', 
      [], function(res) { sql_diccionariUpdate(IdIdioma, res.pop());});
}

function Insert(IdIdioma){
    alasql('ATTACH SQLITE DATABASE Contrasegur("Contrasegur.db"); USE Contrasegur; \n\
                SELECT Contrasenyes, IdIdioma FROM TblContrasenyes WHERE IdIdioma IS NULL OR IdIdioma="" OR IdIdioma="'+ IdIdioma +'";', 
            [], function() { sql_diccionariInsert(IdIdioma);});
}

function CanviarIdiomas(IdIdioma){    
        config = {
          locateFile: filename => `/dist/${filename}`
        };
        alasql('ATTACH SQLITE DATABASE Contrasegur("Contrasegur.db"); USE Contrasegur; \n\
                SELECT * FROM TblTextosGUI;', 
            [], function(res) { traduccio(IdIdioma, res.pop());});   
}

function Evaluacion() {
    base = 0;
    carac = false;
    nume = false;
    espe = false;
    maju = false;
    minus = false;
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
    
    window.alert("Password: " + document.getElementById("contrasenya").value + " \n\ " + 
     Comunes() + "\n\ " +
     Recomanacio() +  idioma.Computacional+ CostComputacional.toExponential() + 
     idioma.Maquina + AnyProcessament.toExponential() + idioma.Processament +
     DiesProcessament.toExponential() + idioma.Nivell + dificultat + idioma.Score + 
     result.score + "/4");
    
    var obrir = window.confirm(idioma.Voldesar);
    if (obrir === true) {
        localStorage.setItem("contrasena", password);
        localStorage.setItem("usuario", user);
        localStorage.setItem("idioma", idioma.IdIdioma);
        const myWindow = window.open("novaPes.html", "_blank", "width=460, height=600, left=0, \n\
    top=0, location=0, menubar=0, resizable=0, scrollbars=0, status=0, titlebar=0, toolbar=0");
    }
}

/**
* Secure Hash Algorithm (SHA1):
* https://coursesweb.net/javascript/sha1-encrypt-data_cs
**/
function SHA1(msg) {
    function rotate_left(n, s) {
        var t4 = (n << s) | (n >>> (32 - s));
        return t4;
    };
    
    /*
    function lsb_hex(val) {
        var str = '';
        var i;
        var vh;
        var vl;
        for (i = 0; i <= 6; i += 2) {
            vh = (val >>> (i * 4 + 4)) & 0x0f;
            vl = (val >>> (i * 4)) & 0x0f;
            str += vh.toString(16) + vl.toString(16);
        }
        return str;
    };
    */
   
    function cvt_hex(val) {
        var str = '';
        var i;
        var v;
        for (i = 7; i >= 0; i--) {
            v = (val >>> (i * 4)) & 0x0f;
            str += v.toString(16);
        }
        return str;
    };
    
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, '\n');
        var utftext = '';
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            } else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            } else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    };
    
    var blockstart;
    var i, j;
    var W = new Array(80);
    var H0 = 0x67452301;
    var H1 = 0xEFCDAB89;
    var H2 = 0x98BADCFE;
    var H3 = 0x10325476;
    var H4 = 0xC3D2E1F0;
    var A, B, C, D, E;
    var temp;
    msg = Utf8Encode(msg);
    var msg_len = msg.length;
    var word_array = new Array();
    for (i = 0; i < msg_len - 3; i += 4) {
        j = msg.charCodeAt(i) << 24 | msg.charCodeAt(i + 1) << 16 |
                msg.charCodeAt(i + 2) << 8 | msg.charCodeAt(i + 3);
        word_array.push(j);
    }
    switch (msg_len % 4) {
        case 0:
            i = 0x080000000;
            break;
        case 1:
            i = msg.charCodeAt(msg_len - 1) << 24 | 0x0800000;
            break;
        case 2:
            i = msg.charCodeAt(msg_len - 2) << 24 | msg.charCodeAt(msg_len - 1) << 16 | 0x08000;
            break;
        case 3:
            i = msg.charCodeAt(msg_len - 3) << 24 | msg.charCodeAt(msg_len - 2) << 16 | msg.charCodeAt(msg_len - 1) << 8 | 0x80;
            break;
    }
    word_array.push(i);
    while ((word_array.length % 16) !== 14)
        word_array.push(0);
    word_array.push(msg_len >>> 29);
    word_array.push((msg_len << 3) & 0x0ffffffff);
    for (blockstart = 0; blockstart < word_array.length; blockstart += 16) {
        for (i = 0; i < 16; i++)
            W[i] = word_array[blockstart + i];
        for (i = 16; i <= 79; i++)
            W[i] = rotate_left(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);
        A = H0;
        B = H1;
        C = H2;
        D = H3;
        E = H4;
        for (i = 0; i <= 19; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (~B & D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 20; i <= 39; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 40; i <= 59; i++) {
            temp = (rotate_left(A, 5) + ((B & C) | (B & D) | (C & D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        for (i = 60; i <= 79; i++) {
            temp = (rotate_left(A, 5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B, 30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);

    return temp.toLowerCase();
}

/**
* JavaScript MD5 function:
* https://css-tricks.com/snippets/javascript/javascript-md5/ 
**/
var MD5 = function (string) {

   function RotateLeft(lValue, iShiftBits) {
           return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
   }

   function AddUnsigned(lX,lY) {
           var lX4,lY4,lX8,lY8,lResult;
           lX8 = (lX & 0x80000000);
           lY8 = (lY & 0x80000000);
           lX4 = (lX & 0x40000000);
           lY4 = (lY & 0x40000000);
           lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
           if (lX4 & lY4) {
                   return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
           }
           if (lX4 | lY4) {
                   if (lResult & 0x40000000) {
                           return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                   } else {
                           return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                   }
           } else {
                   return (lResult ^ lX8 ^ lY8);
           }
   }

   function F(x,y,z) { return (x & y) | ((~x) & z); }
   function G(x,y,z) { return (x & z) | (y & (~z)); }
   function H(x,y,z) { return (x ^ y ^ z); }
   function I(x,y,z) { return (y ^ (x | (~z))); }

   function FF(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function GG(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function HH(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function II(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function ConvertToWordArray(string) {
           var lWordCount;
           var lMessageLength = string.length;
           var lNumberOfWords_temp1=lMessageLength + 8;
           var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
           var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
           var lWordArray=Array(lNumberOfWords-1);
           var lBytePosition = 0;
           var lByteCount = 0;
           while ( lByteCount < lMessageLength ) {
                   lWordCount = (lByteCount-(lByteCount % 4))/4;
                   lBytePosition = (lByteCount % 4)*8;
                   lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                   lByteCount++;
           }
           lWordCount = (lByteCount-(lByteCount % 4))/4;
           lBytePosition = (lByteCount % 4)*8;
           lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
           lWordArray[lNumberOfWords-2] = lMessageLength<<3;
           lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
           return lWordArray;
   };

   function WordToHex(lValue) {
           var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
           for (lCount = 0;lCount<=3;lCount++) {
                   lByte = (lValue>>>(lCount*8)) & 255;
                   WordToHexValue_temp = "0" + lByte.toString(16);
                   WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
           }
           return WordToHexValue;
   };

   function Utf8Encode(string) {
           string = string.replace(/\r\n/g,"\n");
           var utftext = "";

           for (var n = 0; n < string.length; n++) {

                   var c = string.charCodeAt(n);

                   if (c < 128) {
                           utftext += String.fromCharCode(c);
                   }
                   else if((c > 127) && (c < 2048)) {
                           utftext += String.fromCharCode((c >> 6) | 192);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }
                   else {
                           utftext += String.fromCharCode((c >> 12) | 224);
                           utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }

           }

           return utftext;
   };

   var x=Array();
   var k,AA,BB,CC,DD,a,b,c,d;
   var S11=7, S12=12, S13=17, S14=22;
   var S21=5, S22=9 , S23=14, S24=20;
   var S31=4, S32=11, S33=16, S34=23;
   var S41=6, S42=10, S43=15, S44=21;

   string = Utf8Encode(string);

   x = ConvertToWordArray(string);

   a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

   for (k=0;k<x.length;k+=16) {
           AA=a; BB=b; CC=c; DD=d;
           a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
           d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
           c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
           b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
           a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
           d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
           c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
           b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
           a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
           d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
           c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
           b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
           a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
           d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
           c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
           b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
           a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
           d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
           c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
           b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
           a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
           d=GG(d,a,b,c,x[k+10],S22,0x2441453);
           c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
           b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
           a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
           d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
           c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
           b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
           a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
           d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
           c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
           b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
           a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
           d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
           c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
           b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
           a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
           d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
           c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
           b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
           a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
           d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
           c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
           b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
           a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
           d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
           c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
           b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
           a=II(a,b,c,d,x[k+0], S41,0xF4292244);
           d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
           c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
           b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
           a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
           d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
           c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
           b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
           a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
           d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
           c=II(c,d,a,b,x[k+6], S43,0xA3014314);
           b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
           a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
           d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
           c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
           b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
           a=AddUnsigned(a,AA);
           b=AddUnsigned(b,BB);
           c=AddUnsigned(c,CC);
           d=AddUnsigned(d,DD);
        }

   	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

   	return temp.toLowerCase();
};