import { useState, useEffect, useRef } from 'react'
import { generateText, random } from './tsTextgen.tsx'

//Sivut
import { PaaSivu } from './paasivu.tsx'

//css
import './App.css'

function App() {
  const [avaa, setAvaa] = useState(true)
  const [sivu, setSivu] = useState("pääsivu")
  

  //temp

  useEffect(()=>{
    setSivu("pääsivu")
  }, [])

  //endoftemp

  function setS(){setAvaa(!avaa)}

  if (!avaa) {
    return (
      <>
        <button onClick={setS}>{generateText(4)} - {random(1,9)}{random(1,9)}{random(1,9)}{random(1,9)}</button>
      </>
    )

  } else {
    if (sivu == "pääsivu") {

      return (
        <div className='paasivu'>
          <PaaSivu functions={[generateText, random]} />
        </div>
      )
    }
  }
}

export default App
