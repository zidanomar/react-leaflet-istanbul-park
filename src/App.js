import { useEffect, useState } from 'react';
import { default as MyMap } from './components/Map';

function App() {
  const center = [41.0499643, 29.0517462];
  const zoom = 11;

  const [isLoading, setIsLoading] = useState(false);
  const [parkLocations, setParkLocations] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch('data/istanbul-park-location.json')
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setParkLocations(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return isLoading ? (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h1>Loading Data</h1>
    </div>
  ) : (
    <MyMap locations={parkLocations} center={center} zoom={zoom} />
  );
}

export default App;
