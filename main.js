'use strict'

const FORM      = document.getElementById('form');
const INPUT     = document.getElementById('input');
const BTN       = document.getElementById('submit_btn');
const CONTAINER = document.getElementById('container');

// Array.
let pizzas = [
    {
        id: 1,
        nombre: 'Especial',
        ingredientes: ['Salsa', 'Jamon', 'Mozzarella', 'Oregano', 'Morron', 'Aceitunas'],
        precio: 1000
    },

    {
        id: 2,
        nombre: 'Fugazzeta',
        ingredientes: ['Cebolla', 'Mozzarella','Oregano', 'Aceitunas'],
        precio: 1000
    },

    {
        id: 3,
        nombre: '4 Quesos',
        ingredientes: ['Salsa', 'Muzzarella', 'Cheddar', 'Provolone', 'Tybo', 'Oregano', 'Aceitunas'],
        precio: 1100
    },

    {
        id: 4,
        nombre: 'Calabresa',
        ingredientes: ['Salsa', 'Mozzarella', 'Longaniza', 'Aceitunas'],
        precio: 1100
    },

    {
        id: 5,
        nombre: 'Rucula',
        ingredientes: ['Salsa', 'Mozzarella', 'Jamon Crudo','Rucula', 'Parmesano', 'Aceitunas'],
        precio: 1100,
    },

    {
        id: 6,
        nombre: 'Palmitos',
        ingredientes: ['Salsa', 'Mozzarella', 'Oregano', 'Aceitunas', 'Palmitos', 'Salsa Golf'],
        precio: 1200
    },

]

// Guarda la card en localStorage.
const saveLocalStorage = (pizza) => {
    localStorage.setItem('pizza', JSON.stringify(pizza));
};

// Busca la card en el localStorage y llama a la showCard.
const renderCard = () => {
    const pizza = JSON.parse(localStorage.getItem('pizza'));

    if (pizza === null){
        return;
    } else {
        showCard(pizza)
    };
};

// Mete la card al contenedor.
const showCard = (pizza) => {
    console.log(pizza);
    CONTAINER.innerHTML =
        `<div class="card">
            <div class="img_name_price">
                <div>
                    <img src=${setCardImg(parseInt(pizza.id))} alt="">
                </div>
                <div class="name_price">
                    <h2>${pizza.nombre}</h2>
                    <h3>$${pizza.precio}</h3>
                </div>
            </div>
            <div class="ingredients">
                <h4>Ingredientes</h4>
                <p>${(pizza.ingredientes.join(', '))}</p>
            </div>
        </div>`;
};

// Busca de ID, si existe muestra el retorno y llama al clearError. 
// Si no existe chequea el input.
const searchId = (array) => {
    const inputValue = INPUT.value;
    const value = array.some(e => e.id === parseInt(inputValue));
    console.log(inputValue);
    if(value){
        const pizza = array.find(e => e.id === parseInt(inputValue));
        showCard(pizza);
        clearError(INPUT);
        showRender();
        saveLocalStorage(pizza);

    } else {
        checkInput(INPUT);
        hiddenRender();
    };
};

const init = () => {
    renderCard();
    FORM.addEventListener('submit', (e) => {
        e.preventDefault();
        searchId(pizzas);
    });
};

const winLoad = () => {
    window.addEventListener('load', init);
};

winLoad();


