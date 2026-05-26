const buscador = document.getElementById("buscador");

buscador.addEventListener("keyup", function(){

    const texto = buscador.value.toLowerCase();

    const filas = document.querySelectorAll("#tabla tbody tr");

    filas.forEach(fila => {

        const contenido = fila.textContent.toLowerCase();

        if(contenido.includes(texto)){
            fila.style.display = "";
        }else{
            fila.style.display = "none";
        }

    });

});

function agregarFila(){

    const tbody = document.querySelector("#tabla tbody");

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>Nuevo</td>
        <td>18</td>
        <td>Perú</td>
    `;

    tbody.appendChild(fila);

}
