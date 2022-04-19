import React from 'react'

function AgregarCategoriaMenu() {

    const [agregarCategoria, setAgregarCategoria] = React.useState('')

    const agregarCategoriaBtn = e => {
        e.preventDefault()
        console.log(agregarCategoria)
        if (!agregarCategoria.trim()) {
            console.log('Elelemto Vacio')
        }
        
        console.log(agregarCategoria)
    }

    return (
        <>
            <form className="form-group row" onSubmit={agregarCategoriaBtn}>
                <label>Menu Category</label>

                <input
                    type="text"
                    className="form-control col-6"
                    placeholder="Ingrese una categoria"
                    onChange={e => setAgregarCategoria(e.target.value)}
                />

                <button
                    className="btn_1 col-3 left mx-2"
                    type="submit"
                >
                    Agregar Categoria
                </button>
            </form >
        </>
    )
}

export default AgregarCategoriaMenu
