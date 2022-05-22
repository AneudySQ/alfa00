import React from 'react'
import Item from "./Item";



const MenuItemCategoria = ({ item, editar, eliminarCategoria }) => {
  return (
    <div className='col-md-12 m-0 row justify-content-center align-content-center'>
      
      <li className="menu-item-section clearfix form-group container  mt-3 " key={item.id}>
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
{/*       <div className="agregar_nuevo_item  ">
        <button class="icon_plus_alt2 btn"></button>
            <p>Agrega un elemento a tu categoria</p>
      </div>
      <div class="col-md-9">
 */}      <div className='row justify-content-center align-content-center mb-2'>
      <Item />
      </div>
    </div>
  )
}

export default MenuItemCategoria
