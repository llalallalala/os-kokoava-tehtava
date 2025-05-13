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

  function setSDSecondary(val: number) {
    setSiteDarkness(val)
    return "val"
  }

  useEffect(() => {
    setSivu("pääsivu")
  }, [])

  function print(val: any) { console.log(...val) }
  print("hi worl :D")

  const colorWeight: any = {
    "none": (siteDarkness * 1),
    "smol": (siteDarkness * 1.2),
    "beeg": (siteDarkness * 1.5),
    "ginormuz": (siteDarkness * 1.8),
    "omg": (siteDarkness * 2),
    "idek!!": (siteDarkness*3)
  }

  //endoftemp

  function setS() { setAvaa(!avaa) }

  if (!avaa) {
    return (
      <>
        <div className='openPageBody' style={
          {
            backgroundColor: `
            rgb(${255 - colorWeight.ginormuz},
            ${255 - colorWeight.ginormuz},
            ${255 - colorWeight.ginormuz})`,
            color: `
            rgb(${0 + colorWeight["idek!!"]},
            ${0 + colorWeight["idek!!"]},
            ${0 + colorWeight["idek!!"]})`
          }
        }>
          <header style={

            {
              backgroundColor: `
              rgb(${255 - colorWeight.omg},
              ${255 - colorWeight.omg},
              ${255 - colorWeight.omg})`
            }
          }>

            <h1>aaaaaa</h1>
          </header>
          
          <Box sx={{ width: 100 }}>
            <Slider
              defaultValue={siteDarkness}
              getAriaValueText={setSDSecondary}
            >
            </Slider>
          </Box>
          <Button variant='outlined' onClick={setS}>{generateText(4)} - {random(1, 9)}{random(1, 9)}{random(1, 9)}{random(1, 9)}</Button>
          <Footer />
        </div>
      </>
    )

  } else {
    if (sivu == "pääsivu") {

      return (
        <div className='paasivu'>
          <PaaSivu functions={[generateText, random]} />
          <Footer />
        </div>
      )
    }
  }
}

function Footer() {
  return (

    <footer>
      &copy;{generateText(4)} - {generateText(8)}.. 2011 - 20{random(1, 4)}{random(1, 4)}
    </footer>

  )
}

export default App
