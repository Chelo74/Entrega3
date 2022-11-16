'use strict'

// Setea en el contenedor del input la clase 'error'.
const showError = (input, message) => {
    const formField = input.parentElement;

    formField.classList.add('error');
    const error = formField.querySelector('small');

    error.innerText = message;
};

// Quita la clase 'error'.
const clearError = (input) => {
    const formField = input.parentElement;

    formField.classList.remove("error");
    const error = formField.querySelector("small");
    // innerText
    error.innerText = "";
};

// Evalua si el input esta vacio.
const isEmpty = (value) => value === '';

// Setea en el contenedor del render la clase 'hidden', para ocultarlo.
const hiddenRender = () => {
    CONTAINER.classList.add('hidden');
};

// Remueve la clase 'hidden' del contenedor del render, para mostralo.
const showRender = () => {
    CONTAINER.classList.remove('hidden');
};

const setCardImg = (id) => {

    return id === 1 
    ?'./ImgCards/Photo_Menu-4.png'
    :id === 2 
    ?'./ImgCards/Photo_Menu-7.png'
    :id === 3 
    ?'./ImgCards/Photo_Menu.png'
    :id === 4 
    ?'./ImgCards/Photo_Menu-2.png'
    :id === 5 
    ?'./ImgCards/Photo_Menu-1.png'
    :id === 6 
    ?'./ImgCards/Photo_Menu-3.png'
    :'Err'
    
};