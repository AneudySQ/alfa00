import React from 'react'

const BtnEditarNombreCategoria = (editar, item) => {
    return (
        <>
            <a href="#0">
                <button
                    className="btn btn-warning "
                    onClick={() => editar(item)}
                >
                    Editar
                </button>
            </a>

        </>
    )
}

export default BtnEditarNombreCategoria