import { useState } from 'react'
import { generateText, random } from './tsTextgen.tsx'
import './App.css'

function App() {
  const [avaa, setAvaa] = useState(false)

  function setS(){setAvaa(!avaa)}

  if (!avaa) {
    return (
      <>
        <>
        <><><><><><><>
        
        <button onClick={setS}>{generateText(4)} - {random(1,9)}{random(1,9)}{random(1,9)}{random(1,9)}</button>
        
        </></></></></></></></>
      </>
    )
  } else {

    return (
      <>
      <header>
        <h1>{generateText(30)}</h1>
      </header>
      <div>
        <div className='x'>
          <p>{generateText(10)}</p>
          <hr />
          <p>{generateText(300)}</p>
        </div>
      </div>
      <footer>
        &copy;{generateText(4)} - {generateText(8)}.. 2011 - 20{random(1,4)}{random(1,4)}
      </footer>
      </>
    )

  }
}

export default App
