import React from 'react'
import PortadaImagen from '../PortadaImagen'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Section1Admin from '../Section1Admin';
import Section2Admin from '../Section2Admin';
import Section3Admin from '../Section3Admin';



function Admin() {
  return (
    <>
        <PortadaImagen />

  <div class="container margin_60 ">

    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3 tabs">
        <Tab eventKey="home" className='icon-profile' title="Main info">
          <Section1Admin />
        </Tab>
        <Tab eventKey="profile" className='iconos-admin '  title="Menu">
          <Section2Admin />
        </Tab>
        <Tab eventKey="contact" className='icon-profile' title="Settings" >
          <Section3Admin />
  </Tab>
</Tabs>


		</div>
    </>
  )
}

export default Admin