import "./App.css";
import { useEffect, useState } from "react";
import Country from "./country";
import { useSnackbar } from "notistack";

function App() {
  const { enqueueSnackbar } = useSnackbar();
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        enqueueSnackbar(
          error.response.data.message,
          {
            variant: "error",
          }
        )
      }else{
        enqueueSnackbar(
          "Something went wrong. Check that the backend is running, reachable and returns valid JSON.",
          {
            variant: "error",
          }
        )
       } 
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
