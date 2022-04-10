import React from 'react'

function Section2Admin() {
  return (
    <>
    				<section id="section-2">
					<div class="indent_title_in">
						<i class="icon_document_alt"></i>
						<h3>Edit menu list</h3>
						<p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
					</div>
                    
					<div class="wrapper_indent">
						<div class="form-group">
							<label>Menu Category</label>
							<input type="text" name="menu_category" class="form-control" placeholder="EX. Starters"/>
						</div>

						<div class="menu-item-section clearfix">
							<h4>Menu item #1</h4>
							<div><a href="#0"><i class="icon_plus_alt"></i></a><a href="#0"><i class="icon_minus_alt"></i></a>
							</div>
						</div>

						<div class="strip_menu_items">
							<div class="row">
								<div class="col-md-3">
									<div class="menu-item-pic dropzone">
										<input name="file" type="file"/>
										<div class="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
										</div>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-8">
											<div class="form-group">
												<label>Title</label>
												<input type="text"  name="menu_item_title" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Price</label>
												<input type="text" name="menu_item_title_price" class="form-control"/>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Short description</label>
										<input type="text" name="menu_item_description" class="form-control"/>
									</div>

									<div class="form-group">
										<label>Item options</label>
										<div class="table-responsive">
											<table class="table table-striped edit-options">
												<tbody>
													<tr>
														<td className="admin_width_20">
															<input type="text" class="form-control" placeholder="+ $3.50"/>
														</td>
														<td className="admin_width_50">
															<input type="text" class="form-control" placeholder="Ex. Medium"/>
														</td>
														<td className="admin_width_30">
															<label>
																<input type="radio" name="option_item_settings_1" checked class="icheck" value="checkbox"/>Checkbox</label>
															<label class="margin_left">
																<input type="radio" name="option_item_settings_1" class="icheck" value="radio"/>Radio</label>
														</td>
													</tr>
													<tr>
														<td className="admin_width_20">
															<input type="text" class="form-control" placeholder="+ $5.50"/>
														</td>
														<td className="admin_width_50">
															<input type="text" class="form-control" placeholder="Ex. Large"/>
														</td>
														<td className="admin_width_30">
															<label>
																<input type="radio" name="option_item_settings_2" class="icheck" value="checkbox"/>Checkbox</label>
															<label class="margin_left">
																<input type="radio" name="option_item_settings_2" class="icheck" value="radio" checked/>Radio</label>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>

									<div class="form-group">
										<label>Item ingredients</label>
                                        <div class="table-responsive">
										<table class="table table-striped notifications">
											<tbody>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $2.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra tomato"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_3" checked class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_3" class="icheck" value="radio"/>Radio</label>
													</td>
												</tr>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $5.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra Pepper"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_4" class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_4" class="icheck" value="radio" checked/>Radio</label>
													</td>
												</tr>
											</tbody>
										</table>
                                        </div>
									</div>
								</div>
							</div>
						</div>



						<div class="menu-item-section clearfix">
							<h4>Menu item #2</h4>
							<div><a href="#0"><i class="icon_plus_alt"></i></a><a href="#0"><i class="icon_minus_alt"></i></a>
							</div>
						</div>

						<div class="strip_menu_items">
							<div class="row">
								<div class="col-md-3">
									<div class="menu-item-pic dropzone">
										<input name="file" type="file"/>
										<div class="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
										</div>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-8">
											<div class="form-group">
												<label>Title</label>
												<input type="text" name="menu_item_title" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Price</label>
												<input type="text" name="menu_item_title_price" class="form-control"/>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Short description</label>
										<input type="text" name="menu_item_description" class="form-control"/>
									</div>

									<div class="form-group">
										<label>Item options</label>
                                        <div class="table-responsive">
										<table class="table table-striped notifications">
											<tbody>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $3.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Medium"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_5" checked class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_5" class="icheck" value="radio"/>Radio</label>
													</td>
												</tr>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $5.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Large"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_7" class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_7" class="icheck" value="radio" checked/>Radio</label>
													</td>
												</tr>
											</tbody>
										</table>
                                        </div>
									</div>

									<div class="form-group">
										<label>Item ingredients</label>
                                        <div class="table-responsive">
										<table class="table table-striped notifications">
											<tbody>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $2.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra tomato"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_8" checked class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_8" class="icheck" value="radio"/>Radio</label>
													</td>
												</tr>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $5.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra Pepper"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_9" class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_9" class="icheck" value="radio" checked/>Radio</label>
													</td>
												</tr>
											</tbody>
										</table>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<hr class="styled_2"/>
                    
					<div class="wrapper_indent">
						<div class="form-group">
							<label>Menu Category</label>
							<input type="text" name="menu_category" class="form-control" placeholder="EX. Main courses"/>
						</div>

						<div class="menu-item-section clearfix">
							<h4>Menu item #1</h4>
							<div><a href="#0"><i class="icon_plus_alt"></i></a><a href="#0"><i class="icon_minus_alt"></i></a>
							</div>
						</div>

						<div class="strip_menu_items">
							<div class="row">
								<div class="col-md-3">
									<div class="menu-item-pic dropzone">
										<input name="file" type="file"/>
										<div class="dz-default dz-message"><span>Click or Drop<br/>Images Here</span>
										</div>
									</div>
								</div>
								<div class="col-md-9">
									<div class="row">
										<div class="col-md-8">
											<div class="form-group">
												<label>Title</label>
												<input type="text" name="menu_item_title" class="form-control"/>
											</div>
										</div>
										<div class="col-md-4">
											<div class="form-group">
												<label>Price</label>
												<input type="text" name="menu_item_title_price" class="form-control"/>
											</div>
										</div>
									</div>
									<div class="form-group">
										<label>Short description</label>
										<input type="text" name="menu_item_description" class="form-control"/>
									</div>

									<div class="form-group">
										<label>Item options</label>
                                        <div class="table-responsive">
										<table class="table table-striped notifications">
											<tbody>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $3.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Medium"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_10" checked class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_10" class="icheck" value="radio"/>Radio</label>
													</td>
												</tr>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $5.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Large"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_11" class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_11" class="icheck" value="radio" checked/>Radio</label>
													</td>
												</tr>
											</tbody>
										</table>
                                        </div>
									</div>

									<div class="form-group">
										<label>Item ingredients</label>
                                        <div class="table-responsive">
										<table class="table table-striped notifications">
											<tbody>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $2.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra tomato"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_12" checked class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_12" class="icheck" value="radio"/>Radio</label>
													</td>
												</tr>
												<tr>
													<td className="admin_width_20">
														<input type="text" class="form-control" placeholder="+ $5.50"/>
													</td>
													<td className="admin_width_50">
														<input type="text" class="form-control" placeholder="Ex. Extra Pepper"/>
													</td>
													<td className="admin_width_30">
														<label>
															<input type="radio" name="option_item_settings_13" class="icheck" value="checkbox"/>Checkbox</label>
														<label class="margin_left">
															<input type="radio" name="option_item_settings_13" class="icheck" value="radio" checked/>Radio</label>
													</td>
												</tr>
											</tbody>
										</table>
                                        </div>
									</div>
								</div>
							</div>
						</div>
					</div>
                    
					<hr class="styled_2"/>
                    
					<div class="wrapper_indent">
						<div class="add_more_cat"><a href="#0" class="btn_1">Save now</a> <a href="#0" class="btn_1">Add menu category</a> </div>
					</div>
                    
				</section>

        
    </>
  )
}

export default Section2Admin