import React from 'react'
import StripMenuItems from './StripMenuItems'

const MenuItemCategoria = ({ item, editar,eliminarCategoria}) => {
  return (
    <>
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

          <a href="#0">
            <button
              className="btn btn-danger "
              onClick={() => eliminarCategoria(item.id)}
            >
              Eliminar
            </button>
          </a>
        </div >
      </li>
      <StripMenuItems />
    </>
  )
}

export default MenuItemCategoria
