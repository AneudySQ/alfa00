import React from 'react'

function CambiarContrasena() {
  return (
    <>
								<div className="indent_title_in">
								<i className="icon_lock_alt"></i>
								<h3>Change your password</h3>
								<p>
									Mussum ipsum cacilds, vidis litro abertis.
								</p>
							</div>
							<div className="wrapper_indent">
								<div className="form-group">
									<label>Old password</label>
									<input className="form-control" name="old_password" id="old_password" type="password"/>
								</div>
								<div className="form-group">
									<label>New password</label>
									<input className="form-control" name="new_password" id="new_password" type="password"/>
								</div>
								<div className="form-group">
									<label>Confirm new password</label>
									<input className="form-control" name="confirm_new_password" id="confirm_new_password" type="password"/>
								</div>
								<button type="submit" className="btn_1 green">Update Password</button>
							</div>

	</>
  )
}

export default CambiarContrasena