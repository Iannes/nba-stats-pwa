import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPlayers = () => {
  // Declare a new state variable, named "list"
  const [data, setData] = useState({ hits: [] });
  const corsUrl = 'https://cors-anywhere.herokuapp.com/';
  const nbaUrl = 'https://data.nba.net/10s/prod/2018/teams_config.json'

  const combinedUrl = `${corsUrl}${nbaUrl}`

  const fetchData = async () => {
    console.log('Start...')
    const result = await axios(combinedUrl);
       await setData(result.data.teams.config);
       await console.log('done')
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article>
     <label htmlFor="team-select">Choose a team:</label>
      <select id="team-select">
          <option value="All Teams">--All Teams--</option>
          {
            data.length > 0 && data.map(item => {              
              return (
                <option key={item.tricode} value={item.tricode}>
                  {item.ttsName ? item.ttsName :  item.tricode}
                </option>
              )
            })
          }
      </select>
      </article>
  );
}

export default FetchPlayers;