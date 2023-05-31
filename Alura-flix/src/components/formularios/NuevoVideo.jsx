import React, { useState } from 'react'
import CampoTexto from '../CampoTexto'
import Boton from '../Boton/Boton'

const NuevoVideo = (props) => {

    const [form, setForm] = useState({
        titulo: '',
        link: '',
        linkImg: '',
        textarea: '',
        option:'',
        codigo:'',
    });

    const handleSubmit = (e)  => {
        e.preventDefault();
        console.log(form);
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
        <h2>Nuevo Video</h2>
        <form 
        onSubmit={handleSubmit}
        >
            <CampoTexto
            type="text"
            placeholder="Título"
            //required
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            />
            <CampoTexto
            type="text"
            placeholder="Link del video"
            required
            name="link"
            value={form.link}
            onChange={handleChange}
            />
            <CampoTexto
            type="text"
            placeholder="Link imagen del video"
            required
            name="linkImg"
            value={form.linkImg}
            onChange={handleChange}
            />
            <select name="select">
                <option value="Back End" name='option'>Back End</option>
                <option value="Mobile" name='option' ></option>
                <option value="Infraestrutura" name='option' ></option>
                <option value="Data Science" name='option' ></option>
                <option value="Design & UX" name='option' ></option>
                <option value="Marketing Digital" name='option' ></option>
                <option value="Inovación & Gestión" name='option' ></option>
            </select> 
            <textarea 
            placeholder='Descripción'
            name="textarea" 
            cols="30"
            rows="10"
            onChange={ handleChange } 
            ></textarea>
            <CampoTexto 
            type = "number"
            placeholder = 'Código de seguridad'
            required
            name = 'codigo'
            value = {form.codigo}
            onChange={ handleChange }
            />
            <Boton contenido = 'Guardar'/>
            <Boton contenido = 'Limpiar'
            //onClick={ resetForm }
            />
            <Boton contenido = 'Nueva Categoría'/>
        </form>
    </div>
    )
}

export default NuevoVideo;
