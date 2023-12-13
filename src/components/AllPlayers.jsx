import { useEffect, useState } from 'react';

const AllPlayers = ({ setShowSingle, setSinglePlayerDetails }) => {
  const [allPlayerList, setAllPlayerList] = useState([])

  useEffect(() => {
    const getAllPlayers = async() => {
      const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players')
      const responseJson = await response.json();
      const PlayerList = responseJson.data.players;
      setAllPlayerList(PlayerList);
      console.log(PlayerList);
    }
    getAllPlayers();
  }, []);

  return (
    <div className="AllPlayers">
      <h1>All Players</h1>
      {
        allPlayerList.map((OnePlayer) => {
          return (
            <li onClick={() => {
                setShowSingle(false)
                setSinglePlayerDetails(OnePlayer)
              }} key={OnePlayer.id}>
              {OnePlayer.name}
            </li>
          )
        })
      }
    </div>
  );
}

export default AllPlayers;