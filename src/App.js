import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import Loader from './components/Loader';
import Legend from './components/Legend';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?limit=100&page=1&offset=0&sort=desc&unit=%C2%B5g%2Fm%C2%B3&radius=1000&country_id=US&order_by=city&entity=community')
      const aqData = await res.json()

      setEventData(aqData.results)
      setLoading(false)
    }

    fetchEvents()
    console.log(eventData)
  }, [])

  return (
    <div>
      <Header />
      <Legend />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
