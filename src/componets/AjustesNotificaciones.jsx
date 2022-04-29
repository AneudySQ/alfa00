import React from 'react'

function AjustesNotificaciones() {
  return (
    <>
        							<div className="wrapper_indent">
								<table className="table table-striped notifications">
									<tbody>
										<tr>
											<td className='admin_width_5'>
												<i className="icon_pencil-edit_alt"></i>
											</td>
											<td className='admin_width_65'>
												New orders
											</td>
											<td className='admin_width_35'>
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

        
    </>
  )
}

export default AjustesNotificaciones