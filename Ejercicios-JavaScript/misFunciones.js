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
    document.operacionesMat.div_total.value = re;
}

let verLetra = (id, value) => {
    if (isNaN(value)) {
        document.getElementById(id).value = "";
    }
}

let generarUrl = () => {
    const dist = document.getElementById("distancia").value;
    const uni = document.getElementsByName("unidades")[0].value;

    const urlCompl = `segundaWeb.html#${dist}#${uni}`;
    window.open(urlCompl);
}

let cargarvalor = () => {
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

    localStorage.setItem("distanciaLS", dist);
    localStorage.setItem("unidadLS", uni);

    window.open(web2.html);
}

let cargarLS = () => {
    const dist =  localStorage.getItem("distanciaLS");
    const uni =  localStorage.getItem("unidadLS");
    console.log(distancia);
    console.log(unidad);
    document.getElementById("dist").value=`${distancia} ${unidad}`;
}