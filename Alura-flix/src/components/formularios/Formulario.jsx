// FORMULARIO CONTROLADO: está asociado a un estado.

import React, { useState } from 'react'

const Formulario = () => {

    const [form, setForm] = useState({
        titulo: '', // esta llave(titulo) se tiene que corresponder con el valor de name de cada input.
        categoria: '',
        color: '',
        descripcion: '',
    });

    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(form);

        // console.log(e.target)  //target devuelve el elemento que dispara el evento, en este caso form.
    }

    const handleChange = (e) => {
        // console.log(e.target.name) //target.name devuelve el nombre del input asignado mediante name, en este caso titulo.

        // desestructuro el target(elemento, en este caso input) del evento.
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target; // desestructuración en una línea.

        //VALIDACIONES AQUÍ:

        if(form.categoria.length > 10) {
            console.log('El campo es muy largo');
        }

        setForm({
            ...form,
            [name] : value, // name es la llave del objeto(por eso se pone entre corchetes)por ejemplo sería titulo.
        });
    };

    return (
    <>
    <form  
    onSubmit={ handleSubmit }
    >
        <input type="text" placeholder='Título' name='titulo' value={form.titulo} onChange={ handleChange } /> 
        <input type="text" placeholder='Escoja una categoría' name='categoria' value={form.categoria} onChange={ handleChange }/>
        <input type="color" placeholder='Color' name='color' value={form.color} onChange={ handleChange }/>
        <textarea placeholder='Descripción' name='descripcion' cols="30" rows="10" value={form.descripcion} onChange={ handleChange }></textarea>
        <input type="submit" />
    </form>
    </>
    )
}

// el value, que es el valor de lo que está escrito en el input, es lo que debe estar asociado al estado porque es lo que va escribiendo el usuario y es lo que yo necesito.
// Para capturar los cambios, cada vez que se teclea, necesito obtener el valor de esa tecla que se presionó,para registrarla en el value. Eso se logra mediante un evento llamado onChange(registra cada tecla que se presiona)
// Para no tener tantos estados como inputs tenga mi formulario, creamos un objeto como estado inicial 
// necesito obtener una referencia de cada input para poder manipularlo dentro de un objeto, para eso le asigno un name, ese name me va a permitir capturar el value del input.

export default Formulario

// FORMULARIOS NO CONTROLADOS: 
// La función que se decribe abajo es genérica y obtiene los campos de los formularios (agarra el formulario que está en pantalla y se queda con las entradas). Me devuelve el OBJETO formData.

// export const getFormFields = (e) => {
// const fields = Object.fromEntries 
// (new window.FormData(e.target));
// return fields;
// } 