import React from "react";
import AgregarCategoriaMenu from "./AgregarCategoriaMenu";
//import StripMenuItems from "./StripMenuItems";

function MenuEdicion() {
  return (
    <>
      <section id="section-2">
        <div className="indent_title_in">
          <i className="icon_document_alt"></i>
          <h3>Edit menu list</h3>
          <p>
            Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim
            in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea.
            Quo ei graeci repudiare definitionem. Vim et malorum ornatus
            assentior, exerci elaboraret eum ut, diam meliore no mel.
          </p>
        </div>

        <div className="wrapper_indent">
          <AgregarCategoriaMenu />
        </div>

        <hr className="styled_2" />

        <div className="wrapper_indent">
          <div className="add_more_cat ">
            <a href="#0" className="btn_1 m-1">
              Publicar
            </a>
            <a href="#0" className="btn_1 m-1">
              Cancelar
            </a>{" "}
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuEdicion;
