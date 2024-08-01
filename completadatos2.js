const xhttpr = new XMLHttpRequest
xhttpr.onreadystatechange = function() {
    if (this.readyState == 4){
        if(this.status == 200){
            let resp = JSON.parse(this.response)
            tratadatos(resp)
        }
    }
    else{
        console.log("ready state " + this.readyState)
        console.log("status " + this.status)
        }
}

xhttpr.open("get", "ejemplo.json")
xhttpr.send();

function tratadatos(jsondata){
    console.log("Datos Alquileres: ")
    let etiqueta_enlace //= "id_a_" + i
    let etiqueta_imagen //= "casa_a_" + i
    let etiqueta_desc //= "desc_a_" + i
    let miEnlace = ""
    let datosa = jsondata[0];
    let tipo = datosa.tipo;
    if(tipo == 1){
        grabadatosa(datosa)
        console.log("tipo 1")
    }
    else{
        tipo = datosv.tipo;
        console.log("tipo 2")
        grabadatosv(datosv)
    }   

    let datosv = jsondata[1];
    tipo = datosv.tipo;
    if(tipo == 1){
        grabadatosa(datosa)
        console.log("tipo 1")
    }
    else{
        console.log("tipo 2")
        grabadatosv(datosv)
    }   
}  

function grabadatosa(datos_o){
    let i = 1
    let info1 = datos_o.datos;
    console.log("DataA")
    console.log(datos_o)
    info1.forEach(element => {

        console.log("Imagen: ")
        console.log(element.Imagen)
        console.log("Desc: ")
        console.log(element.Descripcion)
        //Armo enlace
        etiqueta_enlace = "id_a_" + i 
        console.log("id: ")
        console.log(etiqueta_enlace)
        miEnlace = document.getElementById(etiqueta_enlace);
        console.log(miEnlace)
        miEnlace.href = "http://www.perfil.com"
        console.log("Enlace: " + miEnlace.href)
        //armo imagen
        etiqueta_imagen = "casa_a_" + i
        miImagen = document.getElementById(etiqueta_imagen);
        miImagen.src = "\imagenes\\" + element.Imagen 
        console.log(miImagen.src)
        //armo texto
        etiqueta_desc = "desc_a_" + i
        miDesc = document.getElementById(etiqueta_desc);
        miDesc.innerText = element.Descripcion
        i += 1
            /*miEnlace.href = "/ventas/detalleventas.php?id=" + datos[0].id*/
        });
}
function grabadatosv(datos_o){
    let j = 1
    let info2 = datos_o.datos;
    console.log("DataV")
    console.log(datos_o)
    info2.forEach(element => {
        //Armo enlace
        etiqueta_enlace = "id_v_" + j
        console.log(etiqueta_enlace)
        miEnlace = document.getElementById(etiqueta_enlace);
        miEnlace.href = "www.google.com"
        console.log("Enlace: " + miEnlace.href)
        //armo imagen
        etiqueta_imagen = "casa_v_" + j
        miImagen = document.getElementById(etiqueta_imagen);
        miImagen.src = "\imagenes\\" + element.Imagen 
        console.log(miImagen.src)
        //armo texto
        etiqueta_desc = "desc_v_" + j
        miDesc = document.getElementById(etiqueta_desc);
        miDesc.innerText = element.Descripcion
        j += 1
        }); 
    }          