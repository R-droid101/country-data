import CountryDetails from './CountryDetails';

function Filter({ setShow, setCountry, displayCountries, ...props }) {


  if (displayCountries.length > 10 || displayCountries.length === 0) {
    return <div>Too many matches, specify another filter</div>;
  }

  else if (displayCountries.length <= 10 && displayCountries.length > 1) {
    return (
      <>
        <div>
          {displayCountries.map((country) => {
            return (
              <div key={country.name.official}>{country.name.common} <button onClick={() => {
                if (props.show.show && props.show.country === country)
                  setShow({ show: false, country: country })
                else
                  setShow({ show: true, country: country })
              }}>show</button>
              </div>
            )
          })}
          {props.show.show ? <CountryDetails country={props.show.country} /> : <></>}
        </div>
      </>
    );
  }

  else {
    return (

      <div>
        {/* {displayCountries.map(country => {
            return (
              <div key={country.name.official}>
                <h1>{country.name.common}</h1>
                <p>
                  capital {country.capital}<br />
                  populaton {country.population}
                </p>
                <h2>languages</h2>
                <ul>
                  {Object.keys(country.languages).map((key, value) => <li key={key}>{country.languages[key]}</li>)}
                </ul>
                <img src={country.flags.png} alt="Flag" />
              </div>
            )
          })} */}
        <CountryDetails country={displayCountries[0]} />
        {/* {console.log(displayCountries[0])} */}
      </div>
    )
  }
}

export default Filter;
