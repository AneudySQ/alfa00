import React from "react";
//import StripMenuItems from "./StripMenuItems";


function MenuItemCategoria({item}) {


  const eliminarItem = id => {
    console.log(id)

  }

  return (
    <>
      <div className="menu-item-section clearfix">
        <h4>Menu item #1</h4>
        <div>
          <a href="#0">
            <i className="icon_plus_alt"></i>
          </a>
          <a href="#0">
            <button className="icon_minus_alt"
            onClick={() => eliminarItem(item.id)}
            ></button>
          </a>
        </div>
      </div>

    </>
  );
}

export default MenuItemCategoria;
