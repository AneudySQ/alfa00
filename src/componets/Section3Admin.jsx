import React from 'react'

export default function Section3Admin() {
  return (
    <>
        				<section id="section-3">

					<div className="row">
                    
						<div className="col-md-6 col-sm-6 add_bottom_15">
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
						</div>
                        
						<div className="col-md-6 col-sm-6 add_bottom_15">
							<div className="indent_title_in">
								<i className="icon_mail_alt"></i>
								<h3>Change your email</h3>
								<p>
									Mussum ipsum cacilds, vidis litro abertis.
								</p>
							</div>
							<div className="wrapper_indent">
								<div className="form-group">
									<label>Old email</label>
									<input className="form-control" name="old_email" id="old_email" type="email"/>
								</div>
								<div className="form-group">
									<label>New email</label>
									<input className="form-control" name="new_email" id="new_email" type="email"/>
								</div>
								<div className="form-group">
									<label>Confirm new email</label>
									<input className="form-control" name="confirm_new_email" id="confirm_new_email" type="email"/>
								</div>
								<button type="submit" className="btn_1 green">Update Email</button>
							</div>
						</div>
                        
					</div>

					<hr className="styled_2"/>
                    
					<div className="indent_title_in">
						<i className="icon_shield"></i>
						<h3>Notification settings</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div className="row">
                    
						<div className="col-md-6 col-sm-6">
							<div className="wrapper_indent">
								<table className="table table-striped notifications">
									<tbody>
										<tr>
											<td classNameName='admin_width_5'>
												<i className="icon_pencil-edit_alt"></i>
											</td>
											<td classNameName='admin_width_65'>
												New orders
											</td>
											<td classNameName='admin_width_35'>
												<label>
													<input type="checkbox" name="option_1_settings" checked className="icheck" value="yes"/>Yes</label>
												<label className="margin_left">
													<input type="checkbox" name="option_1_settings" className="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i className="icon_pencil-edit_alt"></i>
											</td>
											<td>
												Modified orders
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_2_settings" checked className="icheck" value="yes"/>Yes</label>
												<label className="margin_left">
													<input type="checkbox" name="option_2_settings" className="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i className="icon_pencil-edit_alt"></i>
											</td>
											<td>
												New user registration
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_3_settings" checked className="icheck" value="yes"/>Yes</label>
												<label className="margin_left">
													<input type="checkbox" name="option_3_settings" className="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i className="icon_pencil-edit_alt"></i>
											</td>
											<td>
												New comments
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_4_settings" checked className="icheck" value="yes"/>Yes</label>
												<label className="margin_left">
													<input type="checkbox" name="option_4_settings" className="icheck" value="no"/>No</label>
											</td>
										</tr>
									</tbody>
								</table>
								<button type="submit" className="btn_1 green">Update notifications settings</button>
							</div>
                            
						</div>
					</div>
                    
				</section>

    </>
  )
}
