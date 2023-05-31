import React from 'react'

const CampoTexto = (props) => {

    const { required, valor, name, handleChange, type = "text" } = props;

    const placeholdermodificado = `${props.placeholder}`

    return (
    <div>
        {/* <label>{titulo}</label> */}
        <input
        placeholder={placeholdermodificado}
        name={name}
        required = {required}
        value = {valor}
        type={type}
        onChange={handleChange}
        /> 
    </div>
    )
}

export default CampoTexto;
