import React from 'react'
import PortadaImagen from '../PortadaImagen'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import Section1Admin from '../Section1Admin';
import Section2Admin from '../Section2Admin';
import Section3Admin from '../Section3Admin';



function Admin() {
  return (
    <>
        <PortadaImagen />

  <div className="container margin_60 ">

    <Tabs defaultActiveKey="Menu" id="uncontrolled-tab-example" className="mb-3 tabs">
        <Tab eventKey="Main info" className='icon-profile' title="Main info">
          <Section1Admin />
        </Tab>
        <Tab eventKey="Menu" className='iconos-admin '  title="Menu">
          <Section2Admin />
        </Tab>
        <Tab eventKey="Settings" className='icon-profile' title="Settings" >
          <Section3Admin />
  </Tab>
</Tabs>


		</div>
    </>
  )
}

export default Admin