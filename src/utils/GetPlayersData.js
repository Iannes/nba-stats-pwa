
import FetchData from './fetchData'

const GetPlayersData = () => {

    return FetchData('http://data.nba.net/10s/prod/v1/2018/players.json')
  
}

export default GetPlayersData;