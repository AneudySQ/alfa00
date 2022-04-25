import React from 'react'
import Saludo from '../Saludo'


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

    </div>
  )
}

export default App0

