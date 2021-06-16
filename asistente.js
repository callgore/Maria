//mantener despierta a maria
setInterval(checkFocus, 5000 * 5);

function checkFocus() {
    if (document.hasFocus()) {

    } else {
        setInterval(location.reload(true));
    }
}



//iniciar todo
window.onload = HoraActual();
window.onload = iniciar;
window.onload = calculadora;

// Reloj
let horario;

function HoraActual() {
    setInterval(() => {
        let horas;

        //llamar al tiempo
        let time = new Date();
        let hora = time.getHours();
        let minutos = time.getMinutes();
        let segundos = time.getSeconds();

        //pasar de 24hrs a 12hrs
            if (hora == 13) {
                hora = 1;
                } else if (hora == 14) {
                    hora = 2;
                    } else if (hora == 15) {
                        hora = 3;
                        } else if (hora == 16) {
                            hora = 4;
                            } else if (hora == 17) {
                                hora = 5;
                                } else if (hora == 18) {
                                    hora = 6;
                                    } else if (hora == 19) {
                                        hora = 7;
                                        } else if (hora == 20) {
                                            hora = 8;
                                            } else if (hora == 21) {
                                                hora = 9;
                                                } else if (hora == 22) {
                                                    hora = 10;
                                                    } else if (hora == 23) {
                                                        hora = 11;
                                                        } else if (hora == 24) {
                                                            hora = 12;
                                                        }
    
        horas = `Son las ${hora} horas con${minutos} minutos con ${segundos} segundos`
        horario = horas;
    }, 1000);
}

//calculadora

function calculadora() {
    document.getElementById("btnCalculadora").addEventListener("click", () => {
        let box = document.getElementById("caluladora");
        if (document.getElementById("btnCalculadora").value == "abrir") {
            box.style.animation = "abrirCalculadora 1s forwards";
            document.getElementById("btnCalculadora").value = "cerrar";
        } else if (document.getElementById("btnCalculadora").value == "cerrar") {
            box.style.animation = "cerrarCalculadora 1s forwards";
            document.getElementById("btnCalculadora").value = "abrir";
        }
    })
};



var numpantalla = "0";
var pantallaconnumero = "si"; 
var usarpunto = "no";
var numespera = 0;
var operapendiente = "";
var solucion = "";

function ingresarnumero(x) {
    if (x != ".") {

        if (numpantalla == "0" || pantallaconnumero == "si") {
            document.Calculadora.txtboxnros.value = x;
            numpantalla = x;
        }
        else if (x != ".") {
            document.Calculadora.txtboxnros.value += x;
            numpantalla += x;
        }
    }

    if (x == "." && usarpunto == "no" && numpantalla == "0") {
        document.Calculadora.txtboxnros.value = "0.";
        numpantalla = x;
        usarpunto = "si";
    }
    else if (x == "." && usarpunto == "no") {

        document.Calculadora.txtboxnros.value += x;
        numpantalla += x;
        usarpunto = "si";
    }
    else if (x == "." && usarpunto == "si") {

    }
    pantallaconnumero = "no";

}

function ingresaoperacion(y) {
    if (operapendiente == "") {
        numespera = document.Calculadora.txtboxnros.value;
        document.Calculadora.txtboxnros.value += y;
        operapendiente = y;
        pantallaconnumero = "no";
        numpantalla = "";
        usarpunto = "no";
    }

}

function resultado() {

    if (operapendiente != "") {
        solucion = numespera + operapendiente + numpantalla;
        document.Calculadora.txtboxnros.value = eval(solucion);
        numpantalla = eval(solucion);
        pantallaconnumero = "si";
        operapendiente = "";
        usarpunto = "no";
        utter.text = `el resultado de ${solucion} es ${numpantalla}`;
        utter.voice = voices[4];
        window.speechSynthesis.speak(utter);
    }

}

function raiz() {

    if (operapendiente == "") {
        document.Calculadora.txtboxnros.value = Math.sqrt(numpantalla);
        pantallaconnumero = "no";
        operapendiente = "";
        usarpunto = "no";
    }
}

function limpiar() {

    numpantalla = "0";
    pantallaconnumero = "si";
    usarpunto = "no";
    numespera = 0;
    operapendiente = "";
    solucion = "";
    document.Calculadora.txtboxnros.value = "0";
}

//tareas
var lista = [];

lista = JSON.parse(localStorage.lista);

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", agregar);
}

function agregar() {
    var txtAgregar = document.getElementById("txtAgregar").value;
    localStorage.lista = JSON.stringify(lista);
    lista.push(txtAgregar);
    let tarea = ['Se ha agregado la tarea', "tarea agregada", "se agrego la tarea"]
    utter.text = tarea[Math.floor(Math.random() * tarea.length)];
    utter.voice = voices[4];
}

//escuchador
if (annyang) {
    var voices;
    //parametros de voz
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.lang = 'es-AR';

    //Cargamos las voces que tenemos en nuestro sistema y las mostarmos en un arreglo por consola.
    window.speechSynthesis.onvoiceschanged = function () {
        voices = window.speechSynthesis.getVoices();
        console.log(voices);
    };
    //funciones 
        function saludo() {
            hola = ['Hola creador Santiago, que desea hacer ?',"Hola creador Santiago, que necesita?","Hola amo, que precisa?"]
            utter.text = hola[Math.floor(Math.random() * hola.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        };

         function youtube() {
            video = [ 'Abriendo youtube','Redireccionando a youtube','llendo a youtube',]
            utter.text = video[Math.floor(Math.random() * video.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://www.youtube.com/');
        };

        function instagram() {
            insta = ['Abriendo instagram', 'Redireccionando a instagram', 'llendo a instagram',]
            utter.text = insta[Math.floor(Math.random() * insta.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://www.instagram.com/?hl=es');
        }

        function instagramChat() {
            insta = ['Abriendo el chat de instagram', 'Redireccionando al chat de  instagram', 'llendo al chat de  instagram',]
            utter.text = insta[Math.floor(Math.random() * insta.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://www.instagram.com/direct/inbox/');
        }

        function twitter() {
            insta = ['Abriendo twitter', 'Redireccionando a twitter', 'llendo a twitter',]
            utter.text = insta[Math.floor(Math.random() * insta.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://twitter.com/home');
        }

        function twitterChat() {
            insta = ['Abriendo el chat de twitter', 'Redireccionando al chat de  twitter', 'llendo al chat de  twitter',]
            utter.text = insta[Math.floor(Math.random() * insta.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://twitter.com/messages');
        }

        function whatsapp() {
            wasa = ['Abriendo whatsapp', 'Redireccionando a whatsapp', 'llendo a whatsapp',]
            utter.text = wasa[Math.floor(Math.random() * wasa.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://web.whatsapp.com/');
        }

        function reloj() {
            utter.text = horario;
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        }

        function agradecer() {
            gracias = ["gracias a vos Santiago, por ser mi creador","no agradezcas, mi deber es servirte", "es mi tarea complaserte"]
            utter.text = gracias[Math.floor(Math.random() * gracias.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        }

        function pasarLista() {
            tarea = [`tus tareas son ${lista}`, `tienes pendiente ${lista}`, `tienes que hacer ${lista}`];
            utter.text = tarea[Math.floor(Math.random() * tarea.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
        }

        function plataforma() {
            plata = ['Abriendo la plataforma', 'Redireccionando a la plataforma', 'llendo a la plataforma',]
            utter.text = plata[Math.floor(Math.random() * plata.length)];
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open('https://colegio-holmberg.tucampus.org/login/index.php');
        }

        

//comandos para hablar
 var commands = {

        //saludo
        "buenos dias": saludo,
        "Maria": saludo,
        "hola (maria)": saludo,

        //youtube
        "(maria) (abrir) youtube": youtube,
        "(maria) (ver) (ber) video": youtube,

        //buscar en youtube
        "(maria) (ver) (ber) youtube *valor": (valor)=> {
            utter.text = `buscando ${valor} en youtube`;
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open("https://www.youtube.com/results?search_query=" + valor);
        },

        //instagram
         "(maria) (ir) (abrir) instagram": instagram,
         "(maria) (ir) (abrir) instagram chat": instagramChat,

         //tweter
         "(maria) (ir) (abrir) twitter": twitter,
         "(maria) (ir) (abrir) twitter chat": twitterChat,

        //Whatsapp
        "(maria) (ver) (ber) mensaje": whatsapp,
        "(maria) (abrir) whatsapp": whatsapp,
        "(maria) manda *mensaje para *persona" : (mensaje, persona) => {
            let numero = 0;

            //a quien le mando ms?
            if (persona == "Candy" ||persona == "candy" ||persona == "gun" || persona == "can" || persona == "cande" || persona == "candela" || persona == "novia" || persona == "Novia"){
                numero = 5491154059341;
            } else if (persona == "fra" || persona == "Fran" || persona == "francisco" || persona == "bro" || persona == "hermano") {
                numero = 5491139178246;
              } else if (persona == "Pa" || persona == "pa" || persona == "papa" || persona == "padre" || persona == "Papa") {
                   numero = 5491161486925;
                } else if (persona == "Ma" || persona == "ma" || persona == "mama" || persona == "madre" || persona == "Mama") {
                     numero = 5491158391752;
                    }

            //que mensaje mando?
            if (mensaje == "ocupado" || mensaje == "Ocupado" || mensaje == "ocupa") {
                mensaje = "Hola, en este momento estoy ocupado. Hablamos en otro momento!";
            } else if (mensaje == "Boy" || mensaje == "boy" || mensaje == "voy" || mensaje == "Voy" || mensaje == "ya" || mensaje == "Ya") {
                mensaje = "Hola, estoy por terminar algo. Ya te respondo ";
                } else if (mensaje == "Hola" || mensaje == "hola" || mensaje == "ola" || mensaje == "Ola") {
                    mensaje = `hola ${persona}, todo bien? `;
                    } else if (mensaje == "Chau" || mensaje == "chau" || mensaje == "adios" || mensaje == "Adios" || mensaje == "a dios" || mensaje == "Chao") {
                        respuesta = [`Adios ${persona}, tengo que ir `, `Chau ${persona}, me voy`, `Chau ${persona}, me estoy yendo`,]
                        mensaje = respuesta[Math.floor(Math.random() * respuesta.length)];
                        } else if (mensaje == "No" ||mensaje == "no" || mensaje == "nein") {
                             respuesta = ["No estoy de acuerdo con eso", "No", "No! estoy de acuerdo",]
                             mensaje = respuesta[Math.floor(Math.random() * respuesta.length)];
                             } else if (mensaje == "si" || mensaje == "Si") {
                                 respuesta = ["Estoy de acuerdo con eso", "Dale, buenisimo!","Si! estoy de acuerdo",]
                                 mensaje = respuesta[Math.floor(Math.random() * respuesta.length)];
                                 }

            //mando el ms
            if (numero == 0) {
                noEntendi = [`no entendi bien, perdon amo`,"no se entendio, porfavor repitalo","no escuche perdon, porfavor repitalo",]
                console.log(mensaje, persona, numero);
                utter.text = noEntendi[Math.floor(Math.random() * noEntendi.length)];
                utter.voice = voices[4];
                window.speechSynthesis.speak(utter);
              } else {
                    let txt = " *(mensaje enviado por Maria)*";
                    console.log(mensaje, persona, numero);
                    utter.text = `enviando mensaje a${persona}`;
                    utter.voice = voices[4];
                    window.speechSynthesis.speak(utter);
                    window.open(`https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}${txt}`);
                }      
        },

        //funcion de busqueda
        "(maria) google *valor": (valor)=> {
            utter.text = `buscando ${valor} en google`;
            utter.voice = voices[4];
            window.speechSynthesis.speak(utter);
            window.open("https://www.google.com/search?q=" + valor);
         },

         //busqueda en wikipedia
         "(maria) wiki *busca": (busca) => {
             utter.text = `buscando ${busca} en wikipedia`;
             utter.voice = voices[4];
             window.speechSynthesis.speak(utter);
             window.open("https://es.wikipedia.org/wiki/" + busca);
         },

         //matematica

             //numero
             "(maria) calcular *valor": (valor) => {
                 if (valor == "Uno" || valor == "uno" || valor == "Luna") { 
                     valor = 1;
                 } else if (valor == "dos" || valor == "Dos") {
                     valor = 2;
                     } else if ( valor == "tres" || valor == "Tres") {
                         valor = 3;
                         } else if (valor == "cuatro" || valor == "Cuatro") {
                             valor = 4;
                             } else if (valor == "Cinco" || valor == "cinco" || valor =="sing") {
                                valor = 5;
                                 } else if (valor == "says" || valor == "seis" || valor == "Seis" || valor == "size" || valor == "face  ") {
                                     valor = 6;
                                     } else if (valor == "siete" || valor == "Siete" || valor == "siet" || valor == "Siet") {
                                         valor = 7;
                                         } else if (valor == "ocho" || valor == "Ocho") {
                                             valor = 8;
                                            } else if (valor == "nueve" || valor == "Nueve" || valor == "River" || valor == "Nuevo") {
                                                 valor = 9;
                                             }
                 ingresarnumero(valor);
             },

             //suma 
             "(maria) suma": () => {
                 ingresaoperacion("+");
             },

             //resta
             "(maria) resta": () => {
                 ingresaoperacion("-");
             },

             //multiplicacion
             "(maria) multi": () => {
                 ingresaoperacion("*");
             },

             //divicion
             "(maria) sobre": () => {
                 ingresaoperacion("/");
             },

             //elevado
             "(maria) elevar": () => {
                 ingresaoperacion("**");
             },

             //raiz
             "(maria) rais": raiz,

             //resultado
             "(maria) answer": resultado,
             "(maria) respuesta": resultado,

             //borrar cuenta
             "(maria) borrar cuenta": limpiar,
             "(maria) borrar respuesta": limpiar,

        //tareas
        "(maria) work": pasarLista,
        "(maria) tareas": pasarLista,
        "(maria) lista": pasarLista,

        //plataforma
        "(maria) plataforma":plataforma,

        //hora
        '(maria) (que) hora (es)': reloj,

        //agradecer
        '(muchas) gracias (maria)': agradecer,

    };

    //Sumamos todos los comandos a annyang.
    annyang.addCommands(commands);
    console.log(commands);

    //Annyang comienza a escuchar.
    annyang.start({ autoRestart: false, continuous: true, paused: false, });
}