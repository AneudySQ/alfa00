import React from 'react'

function StripMenuItems() {
	return (
		<div>
			<div className="strip_menu_items">
				<div className="row">
					<div className="col-md-3">
						<div className="menu-item-pic dropzone">
							<input name="file" type="file" />
							<div className="dz-default dz-message"><span>Click or Drop<br />Images Here</span>
							</div>
						</div>
					</div>
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-9">
								<div className="form-group">
									<label>Title</label>
									<input type="text" name="menu_item_title" className="form-control" />
								</div>
							</div>
						</div>
						<div className="form-group">
							<label>Short description</label>
							<input type="text" name="menu_item_description" className="form-control" />
						</div>

					</div>
				</div>
			</div>

		</div>
	)
}

export default StripMenuItems