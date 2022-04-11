import React from 'react'
import ItemPlatillo from './ItemPlatillo'


function MenuEdicion() {
  return (
    <>
    				<section id="section-2">
					<div className="indent_title_in">
						<i className="icon_document_alt"></i>
						<h3>Edit menu list</h3>
						<p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
					</div>
                    
					<div className="wrapper_indent">
						<div className="form-group  ">
							<label>Menu Category</label>
							<input type="text" name="menu_category" className="form-control col-2" placeholder="EX. Starters"/> 

						</div>
						<ItemPlatillo />
					</div>

                    
					<hr className="styled_2"/>
                    
					<div className="wrapper_indent">
						<div className="add_more_cat ">
						<a href="#0" className="btn_1 m-1">Publicar</a> 
						<a href="#0" className="btn_1 m-1">Cancelar</a> </div>
					</div>
                    
				</section>

        
    </>
  )
}

export default MenuEdicion