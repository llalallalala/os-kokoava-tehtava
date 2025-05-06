import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

import { generateText, random } from './tsTextgen.tsx'

//Sivut
import { PaaSivu } from './paasivu.tsx'

//css
import './App.css'

function App() {
  const [avaa, setAvaa] = useState(false)
  const [siteDarkness, setSiteDarkness] = useState(0)
  const [sivu, setSivu] = useState("pääsivu")
  

  //temp

  useEffect(()=>{
    setSivu("pääsivu")
  }, [])

  function print(val:any){console.log(...val)}

  const colorWeight:any = {
    "none": 1,
    "smol": 1.2,
    "beeg": 1.5,
    "ginormuz": 1.8,
    "omg": 2
  }

  //endoftemp

  function setS(){setAvaa(!avaa)}

  if (!avaa) {
    return (
      <>
      <div className='openPageBody' style={
        {backgroundColor: `
            rgb(${255-siteDarkness*colorWeight.ginormuz},
            ${255-siteDarkness*colorWeight.ginormuz},
            ${255-siteDarkness*colorWeight.ginormuz})`}
        }>
          <header style={

            {backgroundColor: `
              rgb(${255-siteDarkness*colorWeight.omg},
              ${255-siteDarkness*colorWeight.omg},
              ${255-siteDarkness*colorWeight.omg})`}
            }>

            <h1>aaaaaa</h1>
          </header>
          <Box sx={{width: 100}}>
            <Slider
              defaultValue={siteDarkness}
              getAriaValueText={setSiteDarkness}
              >
            </Slider>
          </Box>

          <Button variant='outlined' onClick={setS}>{generateText(4)} - {random(1,9)}{random(1,9)}{random(1,9)}{random(1,9)}</Button>
      </div>
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
