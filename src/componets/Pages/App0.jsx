import React from 'react'
import Saludo from '../Saludo'
import { Accordion } from 'react-bootstrap'


const App0 = (props) => {

    console.log(props)
    
  return (
    <div>
          <div className='container m-5 text-center'>
              <h1 className='m-5'>Hola</h1>
              <Saludo persona='Aneudy' />
              <Saludo persona='Lui' />
              <Saludo persona='Adrian' />
              <Saludo persona='Lucas' />
          </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  )
}

export default App0

