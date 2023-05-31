import React from 'react'

const Boton = (props) => {
    const {contenido} = props;

    return (
    <div>
        <button>{contenido}</button>
    </div>
    )
}

export default Boton;