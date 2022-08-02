
//almaceono  la direccion del json
  const requestURL = 'js/animales.json';
  //creo nueva instancia del objeto
  const request = new XMLHttpRequest();
  // abro nueva solicitud (open)-> metodo y de donde
  request.open('GET', requestURL);
  //informo q es un json y q debe devolver un javascript
  request.responseType = 'json';
  request.send();


  request.onload = function() {
    listaAnimales = request.response;
    // console.log(listaAnimales.animales)
    // console.log(listaAnimales.animales[0]);  

    for(var i = 0; i < listaAnimales.animales.length; i++){
      // console.log(listaAnimales.animales[i]);
      //lo envio al documento html por medio de su id
      document.getElementById("dataAnimals").innerHTML += 
          `<tr>
            <td>${listaAnimales.animales[i].nombre}</td>
            <td>${listaAnimales.animales[i].alimentacion}</td>
            <td>${listaAnimales.animales[i].habitat}</td>
            <td>${listaAnimales.animales[i].conservacion}</td>
            <td><button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#mas-info${listaAnimales.animales[i].id}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
                    </button></td>
            </tr>`

      //dataDetalle para el MODAL

      document.getElementById("dataDetalle").innerHTML +=
      `
      <div class="modal fade" id="mas-info${listaAnimales.animales[i].id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Animales</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <h3>${listaAnimales.animales[i].nombre}</h3>
                <div class="imagen">
                    <img src="img/animal/${listaAnimales.animales[i].imagen}" alt="Lobo">
                </div>
                <div class="descripcion-imagen">
                    <p>${listaAnimales.animales[i].descripcion}</p>
                    <li>Nombre científico: ${listaAnimales.animales[i].nombreCientifico}</li>
                    <li>Altura: ${listaAnimales.animales[i].altura}</li>
                    <li>Longitud:${listaAnimales.animales[i].longitud}</li>
                    <li>Familia: ${listaAnimales.animales[i].familia}</li>
                    <li>Estado de conservación: ${listaAnimales.animales[i].conservacion}</li>
                    <li>Promedio de vida: ${listaAnimales.animales[i].promedioVida}</li>
                </div>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>   
      `     
    };

    
    
    
  }


