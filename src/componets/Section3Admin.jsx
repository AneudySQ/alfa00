import React from 'react'

export default function Section3Admin() {
  return (
    <>
        				<section id="section-3">

					<div class="row">
                    
						<div class="col-md-6 col-sm-6 add_bottom_15">
							<div class="indent_title_in">
								<i class="icon_lock_alt"></i>
								<h3>Change your password</h3>
								<p>
									Mussum ipsum cacilds, vidis litro abertis.
								</p>
							</div>
							<div class="wrapper_indent">
								<div class="form-group">
									<label>Old password</label>
									<input class="form-control" name="old_password" id="old_password" type="password"/>
								</div>
								<div class="form-group">
									<label>New password</label>
									<input class="form-control" name="new_password" id="new_password" type="password"/>
								</div>
								<div class="form-group">
									<label>Confirm new password</label>
									<input class="form-control" name="confirm_new_password" id="confirm_new_password" type="password"/>
								</div>
								<button type="submit" class="btn_1 green">Update Password</button>
							</div>
						</div>
                        
						<div class="col-md-6 col-sm-6 add_bottom_15">
							<div class="indent_title_in">
								<i class="icon_mail_alt"></i>
								<h3>Change your email</h3>
								<p>
									Mussum ipsum cacilds, vidis litro abertis.
								</p>
							</div>
							<div class="wrapper_indent">
								<div class="form-group">
									<label>Old email</label>
									<input class="form-control" name="old_email" id="old_email" type="email"/>
								</div>
								<div class="form-group">
									<label>New email</label>
									<input class="form-control" name="new_email" id="new_email" type="email"/>
								</div>
								<div class="form-group">
									<label>Confirm new email</label>
									<input class="form-control" name="confirm_new_email" id="confirm_new_email" type="email"/>
								</div>
								<button type="submit" class="btn_1 green">Update Email</button>
							</div>
						</div>
                        
					</div>

					<hr class="styled_2"/>
                    
					<div class="indent_title_in">
						<i class="icon_shield"></i>
						<h3>Notification settings</h3>
						<p>
							Mussum ipsum cacilds, vidis litro abertis.
						</p>
					</div>
					<div class="row">
                    
						<div class="col-md-6 col-sm-6">
							<div class="wrapper_indent">
								<table class="table table-striped notifications">
									<tbody>
										<tr>
											<td className='admin_width_5'>
												<i class="icon_pencil-edit_alt"></i>
											</td>
											<td className='admin_width_65'>
												New orders
											</td>
											<td className='admin_width_35'>
												<label>
													<input type="checkbox" name="option_1_settings" checked class="icheck" value="yes"/>Yes</label>
												<label class="margin_left">
													<input type="checkbox" name="option_1_settings" class="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i class="icon_pencil-edit_alt"></i>
											</td>
											<td>
												Modified orders
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_2_settings" checked class="icheck" value="yes"/>Yes</label>
												<label class="margin_left">
													<input type="checkbox" name="option_2_settings" class="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i class="icon_pencil-edit_alt"></i>
											</td>
											<td>
												New user registration
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_3_settings" checked class="icheck" value="yes"/>Yes</label>
												<label class="margin_left">
													<input type="checkbox" name="option_3_settings" class="icheck" value="no"/>No</label>
											</td>
										</tr>
										<tr>
											<td>
												<i class="icon_pencil-edit_alt"></i>
											</td>
											<td>
												New comments
											</td>
											<td>
												<label>
													<input type="checkbox" name="option_4_settings" checked class="icheck" value="yes"/>Yes</label>
												<label class="margin_left">
													<input type="checkbox" name="option_4_settings" class="icheck" value="no"/>No</label>
											</td>
										</tr>
									</tbody>
								</table>
								<button type="submit" class="btn_1 green">Update notifications settings</button>
							</div>
                            
						</div>
					</div>
                    
				</section>

    </>
  )
}
