import { useEffect, useState } from 'react'

const SinglePlayer = ({ setShowSingle, singlePlayerDetails }) => {

  return (
    <>
      <div className="SinglePlayer">
        <h1>{singlePlayerDetails.name}</h1>
          <h3>Breed: {singlePlayerDetails.breed}</h3>
          <h3>Status: {singlePlayerDetails.status}</h3>
          <img src="singlePlayerDetails.imageUrl" alt="image of a player"/>
        <button onClick={() => {
                setShowSingle(false)
              }}>Back to All Player List
            </button>
      </div>
      {
        console.log(singlePlayerDetails)
      }
    </>
  )
}

export default SinglePlayer;