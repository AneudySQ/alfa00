import React from 'react'

function InformacionGeneralAdmin() {
  return (
    <>
    	<div className="form-group">
			<label>Restaurant name</label>
				<input className="form-control" 
					name="restaurant_name" 
					id="restaurant_name" 
					type="text"
				/>
		</div>
		<div className="form-group">
			<label>Restaurant description</label>
			<textarea className="wysihtml5 form-control admin_height_200px" placeholder="Enter text ..."></textarea>
		</div>
		<div className="row">
			<div className="col-sm-6">
				<div className="form-group">
					<label>Telephone</label>
					<input 
						type="text" 
						id="Telephone" 
						name="Telephone" 
						className="form-control"
					/>
				</div>
			</div>
			<div className="col-sm-6">
				<div className="form-group">
					<label>Email</label>
					<input 
						type="email" 
						id="Email" 
						name="Email" 
						className="form-control"
					/>
				</div>
			</div>
		</div>
  
    </>  
  )
}

export default InformacionGeneralAdmin