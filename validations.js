'use strict'

// Chequea el input y llama a la funcion showError.
const checkInput = (input) => {
    const value = input.value;
    console.log(value);

    if (isEmpty(value)){
        showError(input, '* El campo es obligatorio')
    } else if (isInputValid(value)){
        showError(input, '* Solo puede ingresar numeros')
    } else {
        showError(input, '* No se encontro el ID')
    };

};

// Valida si el valor ingresado en el input es un numero. Devuelve un booleano.
const isInputValid = (value) => {
    let valid = false;
    const re = /^[0-9]/;

    // Niega el resultado del test. Ej: si es falso (el valor no es un numero), ingresa al if y retorna un true, para que ingrese al if en la funcion checkInput y muestre el error.
    if (!re.test(value)){
        return valid = true;
    };

    return valid;
};