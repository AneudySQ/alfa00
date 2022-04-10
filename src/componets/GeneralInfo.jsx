import React from 'react'
import AgregarLogoAdmin from './AgregarLogoAdmin'
import InfmacionDireccionAdmin from './InfmacionDireccionAdmin'
import InformacionGeneralAdmin from './InformacionGeneralAdmin'

function GeneralInfo() {
  return (
    <>
    				<section id="section-1">
					<div className="indent_title_in">
						<i className="icon_house_alt"></i>
						<h3>General restaurant description</h3>
						<p>Partem diceret praesent mel et, vis facilis alienum antiopam ea, vim in sumo diam sonet. Illud ignota cum te, decore elaboraret nec ea. Quo ei graeci repudiare definitionem. Vim et malorum ornatus assentior, exerci elaboraret eum ut, diam meliore no mel.</p>
					</div>

					<div className="wrapper_indent">
						<InformacionGeneralAdmin />
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
						<InfmacionDireccionAdmin />
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
						<AgregarLogoAdmin />
					</div>
                    
					<hr className="styled_2"/>
					<div className="wrapper_indent">
						<button className="btn_1">Save now</button>
					</div>
                    
				</section>

        
    </>
  )
}

export default GeneralInfo