import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
// import CountryDetails from "./components/CountryDetails";

function App() {
  const [countries, setCountries] = useState([]);
  const [displayDetails, setDisplayDetails] = useState("");
  const [show, setShow] = useState({ show: false, country: "" });
  const [country, setCountry] = useState();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const displayCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(displayDetails.toLowerCase())
  );

  const changeDetails = (e) => {
    setDisplayDetails(e.target.value);
    if (displayCountries.length > 10 || displayCountries.length === 0)
      setShow({ show: false, country: "" });
  };

  return (
    <>
      <div className="main">
        Filter Countries: <input value={displayDetails} onChange={changeDetails} />
      </div>
      <Filter
        setShow={setShow}
        setCountry={setCountry}
        displayCountries={displayCountries}
        countries={countries}
        show={show}
        country={country}
      />
    </>
  );
}

export default App;