/**
 * Convierte unidades entre metros, pulgadas, yardas y pies
 * @method convertir_U
 * @param {string} id - Id del elemento input e html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

convertir_U = (id, valor) => {
    let met, pul, pie, yar;

    if (valor.includes(",")) {
        valor = valor.replace(",", ".");
    }
    if (isNaN(valor)) {
        alert("El valor ingresado es incorrecto");
        met = "";
        pul = "";
        yar = "";
        pie = "";
    } else if (id === "metro") {
        met = valor;
        pul = valor * 39.3701;
        pie = valor * 3.28084;
        yar = valor * 1.09361;
    } else if (id === "pulgada") {
        pul = valor;
        met = valor * 0.0254;
        pie = valor * 0.0833333;
        yar = valor * 0.0277778;
    } else if (id === "yarda") {
        yar = valor;
        pul = valor * 36;
        pie = valor * 3;
        met = valor * 0.9144;

    } else if (id === "pie") {
        pie = valor;
        pul = valor * 12;
        met = valor * 0.3048;
        yar = valor * 0.333333;
    }
    document.Unidades.unid_pulgada.value = Math.round(pul * 100) / 100;
    document.Unidades.unid_pie.value = Math.round(pie * 100) / 100;
    document.Unidades.unid_yarda.value = Number(yar).toFixed(2);
    document.Unidades.unid_metro.value = Number(met).toFixed(2);
}

/**
 * Convierte unidades entre grados y radianes
 * @method convertir_GR
 * @param {string} id - Id del elemento input e html
 */

convertir_GR = (id) => {
    let gr, rad;
    if (id === "grados") {
        gr = document.getElementById("grados").value;
        if (isNaN(gr)) {
            alert("El valor ingresado es incorrecto");
            gr = "";
        }
        document.getElementById("radianes").value = (gr * Math.PI) / 180;
    } else if (id === "radianes") {
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)) {
            alert("El valor ingresado es incorrecto");
            rad = "";
        }
        document.getElementById("grados").value = (rad * 180) / Math.PI;
    }
}


/**
 * Oculta o Muestra un div en la parte inferior
 * @method mostrar_ocultar
 * @param {string} id - Id del elemento input radio en html
 */

let mostrar_ocultar = (id) => {
    if (id === "mostrarDiv") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}

/**
 * Suma valores
 * @method sumar
 * @param {string} id - Id del elemento input radio en html
 */

let sumar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.sum_num1.value)
    s2 = Number(document.operacionesMat.sum_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 + s2;
    document.getElementById("totalS").innerHTML = re;
    document.operacionesMat.sum_total.value = re;
}

/**
 * Resta valores
 * @method restar
 * @param {string} id - Id del elemento input radio en html
 */


let restar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.res_num1.value);
    s2 = Number(document.operacionesMat.res_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 - s2;
    document.getElementById("totalR").innerHTML = re;
    document.operacionesMat.res_total.value = re;
}

/**
 * Multiplica valores
 * @method multiplicar
 * @param {string} id - Id del elemento input radio en html
 */


let multiplicar = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.mul_num1.value);
    s2 = Number(document.operacionesMat.mul_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 * s2;
    document.getElementById("totalM").innerHTML = re;
    document.operacionesMat.mul_total.value = re;
}

/**
 * Divide valores
 * @method dividir
 * @param {string} id - Id del elemento input radio en html
 */


let dividir = () => {
    let re, s1, s2;
    s1 = Number(document.operacionesMat.div_num1.value);
    s2 = Number(document.operacionesMat.div_num2.value);
    if (isNaN(s1)) {
        alert("El valor ingresado es incorrecto");
        s1 = "";
    }
    if (isNaN(s2)) {
        alert("El valor ingresado es incorrecto");
        s2 = "";
    }
    re = s1 / s2;
    document.getElementById("totalD").innerHTML = re;
    document.operacionesMat.div_total.value = re;
}

let verLetra = (id, value) => {
    if (isNaN(value)) {
        document.getElementById(id).value = "";
    }
}
/**
 * genera URL para ir a la segunda web
 * @method generarUrl
 */

let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

/**
 * carga el valor de la distancia y la unidad
 * @method cargarValor
 */

let cargarValor = () => {
    let urlCompleta = window.location.href;
    console.log(urlCompleta);
    urlCompleta = urlCompleta.split("#");

    const distancia = urlCompleta[1];
    const unidad = urlCompleta[2];
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let guardarLS = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    window.open("web2.html");
    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);
}

let cargarLS = () => {
    const distancia = localStorage.getItem("distanciaLS");
    const unidad = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = `${distancia} ${unidad}`;
}

let dibujarCirCuad = () => {
    let canvas = document.getElementById("myCanvas");
    let contexto = canvas.getContext("2d");
    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 5;

    contexto.fillStyle = "#333899";
    contexto.fillRect(0 + margen, yMax - 40 - margen, 40, 40);

    contexto.arc(xMax / 2, yMax / 2, 20, 0, 2 * Math.PI);
    contexto.stroke();
    contexto.fillStyle = "#890478";
    contexto.fill();
}
let bandera;
let dibujar = (event) => {
    let canvas = document.getElementById("canvasAdibujar");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;
    console.log(posX, posY);

    canvas.onmousedown = function () {
        bandera = true
    };
    canvas.onmouseup = function () {
        bandera = false
    };
    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

let limpiarcanvas = () => {
    let canvas = document.getElementById("canvasAdibujar");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;
    const paso = 20;
    let ejeX = -24;
    let ejeY = -14;

    //Lineas Verticales
    for (let i = paso; i < anchoMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "rgba(0,0,0,0.47)";
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(ejeX, i, alturaMax / 2);
        ctx.closePath();
        ejeX++;
    }

    //Lineas Horizontales
    for (let i = paso; i < alturaMax; i += paso) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "rgba(0,0,0,0.47)";
        ctx.stroke();
        ctx.font = "10px Arial";
        ctx.fillStyle = "#333";
        ctx.fillText(ejeY, anchoMax / 2, i);
        ctx.closePath();
        ejeY++;
    }

    //Eje X
    ctx.beginPath();
    ctx.moveTo(0, alturaMax / 2);
    ctx.lineTo(anchoMax, alturaMax / 2);
    ctx.strokeStyle = "#ec0505";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax / 2, 0);
    ctx.lineTo(anchoMax / 2, alturaMax);
    ctx.strokeStyle = "#ec0505";
    ctx.stroke();
    ctx.closePath();
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    canvas.width = canvas.width;

    console.log(posX, posY);
    let img = new Image();
    img.src = "images/auto.png";

    if (posX < 0 || posY < 0 || posX >= anchoMax || posY >= alturaMax) {
        openDialog();
    } else {
        img.onload = function () {
            ctx.drawImage(img, posX, posY);
        }
    }
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}
let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close();
}

var x = 0;
var dx = 2;
let animarAuto = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    let img = new Image();
    img.src = "images/auto.png";

    img.onload = function () {
        canvas.width = canvas.width;
        ctx.drawImage(img, x, 100);
    }
    x += dx;
    console.log("La coordenada X es: " + x);
    if (x > canvas.width) { //reseteando la variable, no toma valores tan grandes
        x = 0;
    }
}






