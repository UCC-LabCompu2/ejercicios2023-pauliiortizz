/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
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