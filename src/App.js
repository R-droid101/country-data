import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'

function App() {
  const [countries, setCountries] = useState([])
  const [displayDetails, setDisplayDetails] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => {
      console.log(response.data)
      setCountries(response.data)
    })
  }, [])

  const changeDetails = e => setDisplayDetails(e.target.value)

  return (
    <>
    <div>filter countries<input value={displayDetails} onChange={changeDetails}/></div>
    {/* {JSON.stringify(countries[0].name.common)} */}
      {/* {countries.map(country => <div>{country.name.common} - {country.languages.ell}</div>)} */}
      {/* {countries.map(country => <div key={country.name.official}>{country.name.common}</div>)} */}
      <Filter countries={countries}/>
    </>
  );
}

export default App;
