import React from 'react'
import PortadaImagen from '../PortadaImagen'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import GeneralInfo from '../GeneralInfo';
import MenuEdicion from '../MenuEdicion';
import AjustesPerfil from '../AjustesPerfil';



function Admin() {

  return (
    <>
      <PortadaImagen />

      <div className="container margin_60 ">

        <Tabs defaultActiveKey="Menu" id="uncontrolled-tab-example" className="mb-3 tabs">

          <Tab eventKey="Informacion General" className='icon-profile' title="Informacion General">
            <GeneralInfo />
          </Tab>

          <Tab eventKey="Menu" className='iconos-admin  titulo-admin ' title="Menu">
            <MenuEdicion />
          </Tab>

          <Tab eventKey="Ajustes del Perfil" className='icon-profile' title="Ajustes del Perfil" >
            <AjustesPerfil />
          </Tab>
        </Tabs>


      </div>
    </>
  )
}

export default Admin