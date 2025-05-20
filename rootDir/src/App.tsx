import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import { DisplayContent } from './Content.tsx';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
//import Slider from '@mui/material/Slider';
//import Box from '@mui/material/Box';

import { generateText, random } from './tsTextgen.tsx'

//Sivut

//css
import './App.css'
import { BorderAllRounded } from '@mui/icons-material';

function App() {
  const [siteName, setSiteName] = useState("Home")
  const [mysteriousPopup, setMP] = useState({status:false, rating:0})
  const displayableSiteList:any = Array.from(["Home", "Search", "BPOpfJ", "hsduf"])
  let allowed = false

  if (displayableSiteList.filter((v:string)=>v===siteName).length > 0 ) {
    allowed = true
  }

  if (mysteriousPopup.status == true)
  {
    if (mysteriousPopup.rating < 3)
    {
      window.location.href = 'https://www.wikihow.com/'//Enjoy-Summer-Vacation'
    }
  }

  function setMysteriousRatingThing(e:any)
  {
    let rating:number = Number(e.target.id.replace("sentiment", ""))
    if (rating > 0) {
      setMP({status:true,rating:rating})
    }
  }

  function GetRatingThing() {
    if (mysteriousPopup.status == false) {
      return(<div className='fixed rating'>
        <button onClick={setMysteriousRatingThing} id="sentiment1"><SentimentVeryDissatisfiedIcon id="sentiment1"/></button>
        <button onClick={setMysteriousRatingThing} id="sentiment2"><SentimentDissatisfiedIcon id="sentiment2"/></button>
        <button onClick={setMysteriousRatingThing} id="sentiment3"><SentimentNeutralIcon id="sentiment3"/></button>
        <button onClick={setMysteriousRatingThing} id="sentiment4"><SentimentSatisfiedAltIcon id="sentiment4"/></button>
        <button onClick={setMysteriousRatingThing} id="sentiment5"><SentimentVerySatisfiedIcon id="sentiment5"/></button>
      </div>)
    } else { return (<></>) }
  }

  if (!allowed){return <h1>:(</h1>}
  return(

    <>
      <GetRatingThing />
      <h1 className='fixed'>Sää?</h1>
      <TopBar site={siteName} setSite={setSiteName} displayableSiteList={displayableSiteList} />
      <DisplayContent fortnitePropHuntProps={[siteName]} />
      <Footer />
    </>

  )
}

function TopBar(props:any) {
  const site:string = props.site
  const setSite:any = props.setSite
  const displayableSiteList:any = props.displayableSiteList

  function siteRedirect(e:any) {
    setSite(e.target.id)
  }

  return (<>
    <div className='topBar'>
      {
        displayableSiteList.filter((value:string)=>value!==site)
        .map((value:string, k:any)=>
          (
            <Button key={k} id={value} variant='contained' onClick={siteRedirect}>{value}</Button>
          )
        )
      }
    </div>
  </>)
}

function Footer() {
  return (

    <footer>
      &copy;{generateText(4)} - {generateText(8)}.. 2011 - 20{random(1, 4)}{random(1, 4)}
    </footer>

  )
}

export default App
