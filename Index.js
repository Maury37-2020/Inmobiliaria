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
            let etiqueta_enlace //= "id_a_" + i
            let etiqueta_imagen //= "casa_a_" + i
            let etiqueta_desc //= "desc_a_" + i
            let miEnlace = " "
            let datos1 = jsondata[0];
            let tipo1 = datos1.tipo;
            grabadatos(datos1, tipo1)
            let datos2 = jsondata[1];
            let tipo2 = datos2.tipo;
            grabadatos(datos2, tipo2)
            }   
            
        function grabadatos(datos_o, tipo){
        let i = 1
        if(tipo == 1){
            let info1 = datos_o.datos;
            info1.forEach(element => {
                //Armo enlace
                etiqueta_enlace = "id_a_" + i 
                miEnlace = document.getElementById(etiqueta_enlace);
                miEnlace.href = "www.google.com"
                //armo imagen
                etiqueta_imagen = "casa_a_" + i
                miImagen = document.getElementById(etiqueta_imagen);
                miImagen.src = "\imagenes\\" + element.Imagen 
                //armo texto
                etiqueta_desc = "desc_a_" + i
                miDesc = document.getElementById(etiqueta_desc);
                miDesc.innerText = element.Descripcion
                i += 1
                /*miEnlace.href = "/ventas/detalleventas.php?id=" + datos[0].id*/
                });
        }
        else{
            let j = 1
            let info2 = datos_o.datos;
            info2.forEach(element => {
                //Armo enlace
                etiqueta_enlace = "id_v_" + j
                console.log(etiqueta_enlace)
                miEnlace = document.getElementById(etiqueta_enlace);
                miEnlace.href = "www.google.com"
                //armo imagen
                etiqueta_imagen = "casa_v_" + j
                miImagen = document.getElementById(etiqueta_imagen);
                miImagen.src = "\imagenes\\" + element.Imagen 
                //armo texto
                etiqueta_desc = "desc_v_" + j
                miDesc = document.getElementById(etiqueta_desc);
                miDesc.innerText = element.Descripcion
                j += 1
                }); 
            }          
        }