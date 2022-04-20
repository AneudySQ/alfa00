import React from 'react'
//import MenuItemCategoria from "./MenuItemCategoria";
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

        setItemMenu([
            ...itemMenu,
            { id: shortid.generate(), nombreMenu: agregarCategoria }
        ])
    }

    const eliminarCategoria = id =>{
        console.log(id)

        const arrayFiltrado = itemMenu.filter(item => item.id !== id)
        setItemMenu(arrayFiltrado)

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
                itemMenu.map(item => (

                        <div className="menu-item-section clearfix">
                            <h4>Menu item #1</h4>
                            <div>
                                <a href="#0">
                                    <i className="icon_plus_alt"></i>
                                </a>

                                <a href="#0">
                                    <button 
                                    className="icon_minus_alt"
                                    onClick={() => eliminarCategoria(item.id)}

                                    >
                                              
                                    </button>
                                </a>
                            </div>
                        </div>
                ))

            }



        </>
    )
}

export default AgregarCategoriaMenu
