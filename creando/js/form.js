const f = document.getElementById("formulario")

console.log(f)

f.addEventListener("submit", evento => {
    // console.log(evento)
    varnombre = formulario.nombre.value
    varnombreCientifico = formulario.nombreCientifico.value
    varfamilia = formulario.familia.value
    varalimentacion = formulario.alimentacion.value
    varconservacion = formulario.conservacion.value
    varhabitat = formulario.habitat.value
    vardescripcion = formulario.descripcion.value
    varaltura = formulario.altura.value
    varlongitud = formulario.longitud.value
    varpromedioVida = formulario.promedioVida.value
    varfile = formulario.file.value

    console.log(varnombre, varnombreCientifico, varfamilia, varalimentacion, varconservacion, varhabitat, vardescripcion,
        varaltura, varlongitud, varpromedioVida, varfile)

        document.getElementById("nuevoDato").innerHTML +=
            `
            <div class="control-form">
                <h2>Nuevo dato:  ${varnombre}</h2>
                <div id="nuevodato" >
                    <div class="row">
                        <div class="col-6">
                            <li>nombreCientifico: ${varnombreCientifico}</li>
                            <li>familia: ${varfamilia}</li>
                            <li>conservacion: ${varconservacion}</li>
                        </div>
                        <div class="col-6">
                            <li>alimentacion: ${varalimentacion}</li>
                            <li>habitat: ${varhabitat}</li>
                            <li>promedioVida: ${varpromedioVida}</li>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <li>descripcion: ${vardescripcion}</li>
                        </div>
                        <div class="col-6">
                            <li>altura: ${varaltura}</li>
                            <li>longitud: ${varlongitud}</li>
                        </div>
                    </div>
                </div>
            </div>
            `


    evento.preventDefault()
})