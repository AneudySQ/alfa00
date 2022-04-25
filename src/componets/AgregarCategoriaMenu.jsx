import React from "react";
//import MenuItemCategoria from "./MenuItemCategoria";
import shortid from "shortid";
import BtnAgregarCategoria from "./BtnAgregarCategoria";
import { BtnEditarNombre } from "./BtnEditarNombre";
import BtnEliminarCategoria from "./BtnEliminarCategoria";
import InputAgregarCategoria from "./InputAgregarCategoria";

function AgregarCategoriaMenu(props) {

    const [agregarCategoria, setAgregarCategoria] = React.useState('')
    const [itemMenu, setItemMenu] = React.useState([])
    const [modoEdicion, setModoEdicion] = React.useState(false)
    const [id, setId] = React.useState('')
    const [error, setError] = React.useState(null)

    const agregarCategoriaBtn = e => {
        e.preventDefault()
        console.log(agregarCategoria)
        if (!agregarCategoria.trim()) {
            console.log("Elelemto Vacio")
            setError('Escribe el nombre de la categoria')
            return;
        }
        console.log(agregarCategoria);

        setAgregarCategoria('');

        setItemMenu([
            ...itemMenu,
            { itemMenu, id: shortid.generate(), nombreCategoria: agregarCategoria }
        ])
        setError(null)
    }


    const eliminarCategoria = (id) => {
        console.log(id);

        const arrayFiltrado = itemMenu.filter((item) => item.id !== id);
        setItemMenu(arrayFiltrado);
    };

    const editar = item => {
        console.log(item)
        setModoEdicion(true)
        setAgregarCategoria(item.nombreCategoria)
        setId(item.id)
    }
    const editarNombre = e => {
        e.preventDefault()
        if (!agregarCategoria.trim()) {
            console.log("Elelemto Vacio")
            setError('Escribe el nombre de la categoria')
            return
        }

        const arrayEditado = itemMenu.map(
            item => item.id === id ? { id, nombreCategoria: agregarCategoria }
                : item
        )

        setItemMenu(arrayEditado)
        setModoEdicion(false)
        setAgregarCategoria('')
        setId('')

    }


    return (
        <>
            {
                error ? <span className="text-danger">{error}</span> : null
            }

            <InputAgregarCategoria 
                BtnEditarNombre={BtnEditarNombre}
                BtnAgregarCategoria={BtnAgregarCategoria}
                modoEdicion={modoEdicion}
                editarNombre={editarNombre}
                agregarCategoriaBtn={agregarCategoriaBtn}
                setAgregarCategoriaTarget={e => setAgregarCategoria(e.target.value)}
                value={agregarCategoria}
            />

            {
                itemMenu.length === 0 ? (

                    <h1 className="text-center text-secondary">No hay categorias</h1>
                ) : (
                    itemMenu.map((item) => (
                        <li className="menu-item-section clearfix form-group container" key={item.id}>
                            <h4>{item.nombreCategoria}</h4>
                            <div>

                                <a href="#0">
                                    <button
                                        className="btn btn-warning "
                                        onClick={() => editar(item)}
                                    >
                                        Editar
                                    </button>
                                </a>

                                <BtnEliminarCategoria
                                    eliminarCategoria={eliminarCategoria}
                                    EliminarCategoriaItemId={() => eliminarCategoria(item.id)}
                                />
                            </div >
                        </li>
                    ))
                )
            }
        </>
    );
}

export default AgregarCategoriaMenu;
