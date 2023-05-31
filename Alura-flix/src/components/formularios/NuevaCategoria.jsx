import React, { useState } from 'react'
import CampoTexto from '../CampoTexto'
import Boton from '../Boton/Boton'

const NuevaCategoria = (props) => {

const [form, setForm] = useState({
        nombre: '',
        textarea: '',
        color:'',
        codigo:'',
    });
    
    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(form);
    }

    const resetForm = () => {
        setForm({nombre:'',
        textarea: '',
        color:'',
        codigo:'',
    });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name] : value,
        });
    }

    return (
    <div>
        <h2>Nueva Categoría</h2>
        <form onSubmit={ handleSubmit }>
        <CampoTexto 
        type = "text"
        placeholder = 'Nombre'
        required
        name = 'nombre'
        value = {form.nombre}
        onChange={ handleChange } 
        />
        <textarea
        name ="textarea"
        placeholder ='descripción'
        cols="30"
        rows="10"
        value={form.textarea}
        onChange={ handleChange } 
        ></textarea>
        <CampoTexto 
        placeholder = 'Color'
        required
        type ='color' 
        name ='color' 
        // value = {colorPrimaryMedium}
        onChange={ handleChange }
        />
        <CampoTexto 
        type = "number"
        placeholder = 'Código de seguridad'
        required
        name = 'codigo'
        value = {form.codigo}
        onChange={ handleChange }
        />
        <Boton 
        contenido = 'Guardar'
        type = 'submit'
        />
        <Boton contenido = 'Limpiar' onClick={ resetForm } />
        <Boton contenido = 'Nueva Categoría'/>
        </form>
    </div>
    )
}

export default NuevaCategoria;