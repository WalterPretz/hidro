const resultados = fetch('http://localhost:3002')
    .then((response) => response.json())
    .then((json) => {
        let tarjetas = document.getElementById('resultadoProductos');
        let divs = '';

        divs += `
            <div class="col-6 col-sm-6 col-md-4 col-lg-3">
            <div class="cajaProductos1 text-center">
                <img src="/proyecto/resource/img/p1.png" alt="bomba" class="img-fluid">
                <div class="row">
                    <div class="col text-end"><a href=""><i class="fa-solid fa-cart-shopping"></i></a></div>
                    <div class="col text-start"><a href=""><i class="fa-regular fa-eye"></i></a></div>
                </div>
                <p class="textoAzulProd">${json[0].nombre}</p>
                <p class="text-danger">Q. 1,500.00</p>
            </div>
            </div>
        `;
        tarjetas.innerHTML = divs;
        return json;
    });