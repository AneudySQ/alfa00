import React from 'react'
import MenuItemCategoria from "./MenuItemCategoria";
import shortid from 'shortid'


function AgregarCategoriaMenu() {

    const [agregarCategoria, setAgregarCategoria] = React.useState('')
    const [itemMenu, setItemMenu] = React.useState([])

    const agregarCategoriaBtn = e => {
        e.preventDefault()
        console.log(agregarCategoria)
        if (!agregarCategoria.trim()) {
            console.log('Elelemto Vacio')
        }
        
        console.log(agregarCategoria)

        setItemMenu ([
            ...itemMenu,
            {id: shortid.generate(), nombreMenu: agregarCategoria }
        ])
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
                    value={agregarCategoria}
                />

                <button
                    className="btn_1 col-3 left mx-2"
                    type="submit"
                >
                    Agregar Categoria
                </button>
            </form >

            {
                itemMenu.map(item =>(
                    <MenuItemCategoria />
                ))

            }


            
        </>
    )
}

export default AgregarCategoriaMenu
