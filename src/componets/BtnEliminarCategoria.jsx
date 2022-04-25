import React from 'react'

const BtnEliminarCategoria = ({eliminarCategoria, item }) => {
    return (
        <>
            <a href="#0">
                <button
                    className="btn btn-danger "
                    onClick={() => eliminarCategoria(item.id)}
                >
                    Eliminar
                </button>
            </a>

        </>
    )
}

export default BtnEliminarCategoria
