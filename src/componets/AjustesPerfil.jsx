import React from 'react'
import AjustesNotificaciones from './AjustesNotificaciones'
import CambiarContrasena from './CambiarContrasena'
import CambiarCorreo from './CambiarCorreo'

export default function AjustesPerfil() {
  return (
    <>
        				<section id="section-3">

					<div className="row">
                    
						<div className="col-md-6 col-sm-6 add_bottom_15">
							<CambiarContrasena />
						</div>
                        
						<div className="col-md-6 col-sm-6 add_bottom_15">
							<CambiarCorreo />
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
                            <AjustesNotificaciones />
						</div>
					</div>
                    
				</section>

    </>
  )
}
