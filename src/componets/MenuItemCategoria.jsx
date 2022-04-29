import React from 'react'

const MenuItemCategoria = ({ item, editar, eliminarCategoria }) => {
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
      <div className="agregar_nuevo_item  ">
        <button class="icon_plus_alt2 btn"></button>
            <p>Agrega un elemento a tu categoria</p>
      </div>
    </>
  )
}

export default MenuItemCategoria
