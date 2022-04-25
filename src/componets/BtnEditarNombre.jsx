import React from 'react'

export const BtnEditarNombre = (BtnEditarNombre ) => {
    return (
        <>
            <button 
            onClick={BtnEditarNombre}
            className="btn-warning col-3 left mx-2 " 
            type="submit" 
            >Editar nombre</button>

        </>
    )
}
