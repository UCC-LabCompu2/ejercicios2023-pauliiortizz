/**
 * Convierte unidades entre metros, pulgadas, yardas y pies
 * @method convertir_U
 * @param {string} id - Id del elemento input e html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */

convertir_U = (id, valor) => {
    let met, pul, pie, yar;

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
    document.Unidades.unid_pulgada.value = pul;
    document.Unidades.unid_pie.value = pie;
    document.Unidades.unid_yarda.value = yar;
    document.Unidades.unid_metro.value = met;
}

/**
 * Convierte unidades entre grados y radianes
 * @method convertir_GR
 * @param {string} id - Id del elemento input e html
 */

convertir_GR = (id) => {
    let gr, rad;
    if (id == "grados") {
        gr = document.getElementById("grados").value;
        if (isNaN(gr)) {
            alert("El valor ingresado es incorrecto");
            gr = "";
        }
        document.getElementById("radianes").value = (gr * Math.PI) / 180;
    } else if (id == "radianes") {
        rad = document.getElementById("radianes").value;
        if (isNaN(rad)) {
            alert("El valor ingresado es incorrecto");
            rad = "";
        }
        document.getElementById("grados").value = (rad * 180) / Math.PI;
    }
}


/**
 * Convierte unidades entre grados y radianes
 * @method convertir_GR
 * @param {string} id - Id del elemento input e html
 */

let mostrar_ocultar = (id) => {
    if (id === "mostrarDiv") {
        document.getElementsByName("unDiv")[0].style.display = 'block';
    } else {
        document.getElementsByName("unDiv")[0].style.display = 'none';
    }
}