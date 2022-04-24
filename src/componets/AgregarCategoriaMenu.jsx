import React from "react";
//import MenuItemCategoria from "./MenuItemCategoria";
import shortid from "shortid";

function AgregarCategoriaMenu() {

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

            <form className="form-group row" onSubmit={modoEdicion ? editarNombre : agregarCategoriaBtn}>
                <label>
                    {
                        modoEdicion ? (<h5 className=" text-warning">Editar Nombre de la categoria</h5>) : (<h5 className="text-success">Agregar Categoria</h5>)
                    }
                </label>


                <input
                    type="text"
                    className="form-control col-6"
                    placeholder="Ingrese una categoria"
                    onChange={e => setAgregarCategoria(e.target.value)}
                    value={agregarCategoria}
                />

                {
                    modoEdicion ? (
                        <button className="btn-warning col-3 left mx-2 " type="submit" >Editar nombre</button>

                    ) : (
                        <button className="btn_1 col-3 left mx-2 " type="submit" >Agregar Categoria</button>

                    )

                }


            </form>

            {
                itemMenu.length === 0 ?(

                    <h1 className="text-center text-secondary">No hay categorias</h1>
                ) :(

                        itemMenu.map((item) => (
            <li className="menu-item-section clearfix" key={item.id}>
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

                    <a href="#0">
                        <button
                            className="btn btn-danger "
                            onClick={() => eliminarCategoria(item.id)}
                        >Eliminar categoria</button>
                    </a>
                </div>
            </li>
            ))
            )
            
            }
        </>
    );
}

export default AgregarCategoriaMenu;
