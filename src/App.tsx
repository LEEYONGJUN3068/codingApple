import useGeoLocation from "./useGeolocation";

function App() {
  const location = useGeoLocation();

  return (
    <div className="App">
      {location.loaded
        ? JSON.stringify(location)
      : "Location data not available yet."}
    </div>
  );
}

export default App;