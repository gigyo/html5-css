const requestURL = 'js/animales.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType ='json';
request.send();

request.onload = function(){
    listacard =request.response;
    // console.log(listacard);

    for (let i = 0; i < listacard.animales.length; i++) {
        
        document.getElementById("cardAnimals").innerHTML +=
        `
        <div class="col">
          <div class="card">
            <img src="img/animal/${listacard.animales[i].imagen}" class="card-img-top" alt="${listacard.animales[i].nombre}">
            <div class="card-body">
              <h5 class="card-title">${listacard.animales[i].nombre} - ${listacard.animales[i].nombreCientifico}</h5>
              <p class="card-text">${listacard.animales[i].descripcion}</p>
              <p class="card-text">${listacard.animales.habitat}</p>
            </div>
          </div>
        </div>
        `
    }
}