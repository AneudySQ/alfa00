import React from 'react'

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
						<div className="form-group">
							<label>Menu Category</label>
							<input type="text" name="menu_category" className="form-control" placeholder="EX. Starters"/>
						</div>

						<div className="menu-item-section clearfix">
							<h4>Menu item #1</h4>
							<div><a href="#0"><i className="icon_plus_alt"></i></a><a href="#0"><i className="icon_minus_alt"></i></a>
							</div>
						</div>

						<div className="strip_menu_items">
							<div className="row">
								<div className="col-md-3">
									<div className="menu-item-pic dropzone">
										<input name="file" type="file"/>
										<div className="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
										</div>
									</div>
								</div>
								<div className="col-md-9">
									<div className="row">
										<div className="col-md-8">
											<div className="form-group">
												<label>Title</label>
												<input type="text"  name="menu_item_title" className="form-control"/>
											</div>
										</div>
										<div className="col-md-4">
											<div className="form-group">
												<label>Price</label>
												<input type="text" name="menu_item_title_price" className="form-control"/>
											</div>
										</div>
									</div>
									<div className="form-group">
										<label>Short description</label>
										<input type="text" name="menu_item_description" className="form-control"/>
									</div>

								</div>
							</div>
						</div>
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