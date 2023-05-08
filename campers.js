// 2. Clase camperCard equivalente a <camper-card>
//2.1 Heredamos con extend de clase de HTMLElement

//10. Crear template
const template = document.createElement('template');
template.innerHTML = `
<style>
    h3 {color:orange;}
</style>
<div>
    <img width="250px"/>
    <h3></h3>

</div>
`

class CamperCard extends HTMLElement {
    constructor(){
        //2.2 Heredamos con super()
        super();
        //Obtenemos atributo de camper card
        
        this.attachShadow({mode: 'open'}); //Creamos shadow DOM dentro del constructor

        this.shadowRoot.appendChild(template.content.cloneNode(true)); // Referenciamos un template
        this.shadowRoot.querySelector('h3').textContent = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('photo');
        //Seleccionar <img/> para asignar atributo photo
    }
};

//3. Definir custom element
window.customElements.define('camper-card', CamperCard);