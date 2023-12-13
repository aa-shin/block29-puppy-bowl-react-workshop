import { Routes, Route, Link } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import { useState } from 'react';
import './App.css'

const App = () => {
  const [showSingle, setShowSingle] = useState(false);
  const [singlePlayerDetails, setSinglePlayerDetails] = useState({})

  return (
    <>
      <h1>Puppy Bowl</h1>
      {
        showSingle ? <SinglePlayer singlePlayerDetails={singlePlayerDetails} setShowSingle={setShowSingle}/> : <AllPlayers setShowSingle={setShowSingle} setSinglePlayerDetails={setSinglePlayerDetails}/>
      }
      {
        console.log(singlePlayerDetails)
      }
    </>
  )
}

export default App
