import "./App.css";
import { useEffect, useState } from "react";
import Country from "./country";

function App() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div className="App">
      <h2 style={{ color: "#f56642" }}>All Country Flags</h2>
      <Country countryData={countryData} />
    </div>
  );
}

export default App;
