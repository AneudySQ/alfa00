import React from 'react'

function AgregarCategoriaMenu() {
    return (
        <>
            <div className="form-group row">
                <label>Menu Category</label>
                <input 
                type="text" 
                name="menu_category" 
                className="form-control col-6" 
                placeholder="EX. Starters" /> 

                <div 
                className="col-3 btn_1 margin ml-2 "
                >Agregar Categoria</div>
            </div>
        </>
    )
}

export default AgregarCategoriaMenu
