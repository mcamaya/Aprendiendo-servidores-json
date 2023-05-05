const btn = document.querySelector('#myForm');

btn.addEventListener('submit', async(event)=>{
    event.preventDefault();
    let accion = event.submitter.dataset.accion;
    switch (accion) {
        case "enviar":
            break;
        case "listar":
            let peticion = await fetch('http://localhost:4001/usuario');
            let datos = await peticion.json();
            console.log(datos);
    }
});