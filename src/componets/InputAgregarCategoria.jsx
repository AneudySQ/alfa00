import React from 'react'

const InputAgregarCategoria = ({ BtnEditarNombre, BtnAgregarCategoria, setAgregarCategoriaTarget, agregarCategoria,   ...props}) => {
  return (
    < div className='col-md-12 m-0 row justify-content-center align-content-center '>
      <form className="form-group  row" onSubmit={props.modoEdicion ? props.editarNombre : props.agregarCategoriaBtn}>
        <label>
          {
            props.modoEdicion ? (<h5 className=" text-warning">Editar Nombre de la categoria</h5>) : (<h5 className="text-success">Agregar Categoria</h5>)
          }
        </label>


        <input
          type="text"
          className="form-control col-6"
          placeholder="Ingrese una categoria"
          onChange={setAgregarCategoriaTarget}
          value={agregarCategoria}


        />


        {
          props.modoEdicion ? (
            <BtnEditarNombre
              BtnEditarNombre={props.BtnEditarNombre}
            />
          ) : (
            <BtnAgregarCategoria />
          )
        }

      </form>

    </div>
  )
}

export default InputAgregarCategoria
