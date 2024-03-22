//base de datos local de preguntas
const bd_juego = [
    {
        id:0,
        pregunta:"Cal destes autores non pertence á Xeración do 27?",
        op0:"Federico García Lorca",
        op1:"Luis Cernuda",
        op2:"Pedro Salinas",
        op3:"Valle-Inclán",
        correcta:"2"
    },
    {
        id:1,
        pregunta:" ",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:2,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:3,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:4,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:5,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:6,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:7,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:8,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    },
    {
        id:9,
        pregunta:"Cal foi o último rei español pertencente ó Antigo Réxime?",
        op0:"Floridablanca",
        op1:"Francisco José I",
        op2:"Fernando VII",
        op3:"Esquilache",
        correcta:"2"
    }
]

//para guardar las respuestas elegidas
let respuestas = [];
//cantidad correctas
let cantiCorrectas = 0;
//preguntas actual que debe ser cargada
let numPregunta = 0;

//Cargo una pregunta del JSON
function cargarPreguntas(){
    //tomo la pregunta actual de la bd
    const pregunta = bd_juego[numPregunta];

    const contenedor = document.createElement("div");
    contenedor.className = "contenedor-pregunta";
    contenedor.id = pregunta.id;
    const h2 = document.createElement("h2");
    h2.textContent = pregunta.id + 1 + " - " + pregunta.pregunta;
    contenedor.appendChild(h2);
    const opciones = document.createElement("div");

    //vamos a crear los tres labels
    //Lo vamos a hacer mediante una función.
    // A dicha función le envio el numero del label y la opcion
    // el texto, de dicho label
    const label1 = crearLabel("0",pregunta.op0);
    const label2 = crearLabel("0",pregunta.op1);
    const label3 = crearLabel("0",pregunta.op2);

    //agrego los labels al contenedor de las opciones
    opciones.appendChild(label1);
    opciones.appendChild(label2);
    opciones.appendChild(label3);

    //agrego las opciones al contenedor principal
    contenedor.appendChild(opciones);
    document.getElementById("juego").appendChild(contenedor);
}

//creo la función que retornará el label con todo su contenido
function crearLabel(numPregunta, txtOpcion){
    const label = document.createElement("label");
    label.id = "l" + numPregunta + numPregunta;
    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.name = "p" + numPregunta;
    input.setAttribute("oncilck", "seleccionar(" + numPregunta+","+num+")");
    const span = document.createElement("span");
    const correccion = document.createElement("span");
    correccion.id = "p" + numPregunta + num;
    span.textContent = txtOpcion;
    label.appendChild(input);
    label.appendChild(span);
    label.appendChild(correccion);

    return label;
}

//Mediante un for cargo todas las pteguntas del JSON
for(i=0;i < bd_juego.length;i++){
    cargarPreguntas();
    //actualiza el numero de pregunta actual
    numPregunta++;
}

//Función que carga la opción elegida en el arreglo respuestas.
function seleccionar(pos, opElegida){
    respuestas[pos] = opElegida;
}

//botón corregir
let corregir = document.getElementById("corregir");
corregir.onclick = function(){
    //recorro el arreglo que tiene las respuestas y comparo
    for(i=0;i<bd_juego.length;i++){
        //cargo la pregunta
        const pregunta = bd_juego[i];
        if(pregunta.correcta == respuestas [i]){ //respuesta correcta
            cantiCorrectas++;
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta correcta";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }else{//no acerto
            let id = "p" + i + respuestas[i];
            let idCorreccion = "p" + i + pregunta.correcta;
            document.getElementById(i).className = "contenedor-pregunta incorrecta";
            document.getElementById(id).innerHTML = "&#x2715;";
            document.getElementById(id).className = "no-acierto";
            document.getElementById(idCorreccion).innerHTML = "&check;";
            document.getElementById(idCorreccion).className = "acierto";
        }
    }

    //desabilitamos todos los inputs
    let inputs = document.getElementsByTagName("input");
    for(i=0;i<inputs.length;i++){
        inputs[i].disabled = true;
    }

    //hacemos un scroll hacia arriba
    window.screenTo(0,0);
    //colocamosla cantidad que acerto y las que no acertó
    h2 = document.createElement("h2");
    h2.className = "resultado";
    h2.textContent = cantiCorrectas + "CORRECTAS - " + (10-cantiCorrectas) + " INCORRECTAS";
    document.getElementsById("juego").appendChild(h2);
}