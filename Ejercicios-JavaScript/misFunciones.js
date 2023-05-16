/**
 * Convierte unidades entre metros, pulgadas, yardas y pies
 * @method convertir_U
 * @param {string} id - Id del elemento input e html
 * @param {number} valor - Contiene el valor del input que ingreso el usuario
 */



function convertir_U(id, valor){
    if (isNaN(valor)){
        alert("El valor ingresado es incorrecto");
        document.Unidades.unid_metro.value="";
        document.Unidades.unid_pulgada.value="";
        document.Unidades.unid_pie.value="";
        document.Unidades.unid_yarda.value="";
    }else if (id=="metro"){
        document.Unidades.unid_pulgada.value=valor*39.3701;
        document.Unidades.unid_pie.value=valor*3.28084;
        document.Unidades.unid_yarda.value=valor*1.09361;
    }else if(id=="pulgada"){
        document.Unidades.unid_metro.value=valor*0.0254;
        document.Unidades.unid_pie.value=valor*0.0833333;
        document.Unidades.unid_yarda.value=valor*0.0277778;
    }else if(id=="yarda"){
        document.Unidades.unid_pulgada.value=valor*36;
        document.Unidades.unid_pie.value=valor*3;
        document.Unidades.unid_metro.value=valor*0.9144;

    }else if(id=="pie"){
        document.Unidades.unid_pulgada.value=valor*12;
        document.Unidades.unid_metro.value=valor*0.3048;
        document.Unidades.unid_yarda.value=valor*0.333333;
    }
}

function convertir_GR(id){
    if (id=="grados"){
        let gr =document.getElementById("grados").value;
        document.getElementById("radianes").value=(gr*Math.PI)/180;
    } else if(id=="radianes"){
        let rad =document.getElementById("rad").value;
        document.getElementById("radianes").value= (rad*180)/Math.PI;
    }
}