const resultados = fetch('http://localhost:3002')
    .then((response) => response.json())
    .then((json) => {
        let tarjetas = document.getElementById('resultadoPeticion');
        let divs = '';
        for (var x in json) {
        divs += `
            <div class='col-6 col-sm-6 col-md-4 col-lg-3'>
                <div class="cajaProductos1 text-center">
                    <img src="/proyecto/resource/img/${json[x].imagen}" alt="bomba" class="img-fluid">
                    <div class="row">
                        <div class="col text-end"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
                        <div class="col text-start"><a href=""><i class="fa-regular fa-eye"></i></a></div>
                    </div>
                    <p class="textoAzulProd">${json[x].nombre}</p>
                    <p class="text-danger">Q. ${json[x].precio_venta}</p>
                </div>
            </div>
        `;
        }
        tarjetas.innerHTML = divs;
        return json;
    });