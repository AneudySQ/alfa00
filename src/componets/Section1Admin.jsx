import React from 'react'

function Section1Admin() {
  return (
    <>
    				<section id="section-1">
					<div className="indent_title_in">
						<i className="icon_house_alt"></i>
						<h3>General restaurant description</h3>
						<p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
					</div>

					<div className="wrapper_indent">
						<div className="form-group">
							<label>Restaurant name</label>
							<input className="form-control" name="restaurant_name" id="restaurant_name" type="text"/>
						</div>
						<div className="form-group">
							<label>Restaurant description</label>
							<textarea className="wysihtml5 form-control admin_height_200px" placeholder="Enter text ..."></textarea>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Telephone</label>
									<input type="text" id="Telephone" name="Telephone" className="form-control"/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Email</label>
									<input type="email" id="Email" name="Email" className="form-control"/>
								</div>
							</div>
						</div>
					</div>

					<hr className="styled_2"/>

					<div className="indent_title_in">
						<i className="icon_pin_alt"></i>
						<h3>Address</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div className="wrapper_indent">
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Country</label>
									<select className="form-control" name="country" id="country">
										<option value="" selected>Select your country</option>
										<option value="Europe">Europe</option>
										<option value="United states">United states</option>
										<option value="Asia">Asia</option>
									</select>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-6">
								<div className="form-group">
									<label>Street line 1</label>
									<input type="text" id="street_1" name="street_1" className="form-control"/>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="form-group">
									<label>Street line 2</label>
									<input type="text" id="street_2" name="street_2" className="form-control"/>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="form-group">
									<label>City</label>
									<input type="text" id="city_booking" name="city_booking" className="form-control"/>
								</div>
							</div>
							<div className="col-md-3">
								<div className="form-group">
									<label>State</label>
									<input type="text" id="state_booking" name="state_booking" className="form-control"/>
								</div>
							</div>
							<div className="col-md-3">
								<div className="form-group">
									<label>Postal code</label>
									<input type="text" id="postal_code" name="postal_code" className="form-control"/>
								</div>
							</div>
						</div>
					</div>

					<hr className="styled_2"/>
					<div className="indent_title_in">
						<i className="icon_images"></i>
						<h3>Logo and restaurant photos</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>

					<div className="wrapper_indent add_bottom_45">
						<div className="form-group">
							<label>Upload your restaurant logo</label>
							<div id="logo_picture" className="dropzone">
								<input name="file" type="file"/>
								<div className="dz-default dz-message"><span>Click or Drop Images Here</span>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label>Upload your restaurant photos</label>
							<div id="photos" className="dropzone">
								<input name="file" type="file" multiple/>
								<div className="dz-default dz-message"><span>Click or Drop Images Here</span>
								</div>
							</div>
						</div>
					</div>
                    
					<hr className="styled_2"/>
					<div className="wrapper_indent">
						<button className="btn_1">Save now</button>
					</div>
                    
				</section>

        
    </>
  )
}

export default Section1Admin