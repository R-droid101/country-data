import CountryDetails from './CountryDetails';

function Filter({ setShow, setCountry, displayCountries, ...props }) {


  if (displayCountries.length > 10 || displayCountries.length === 0) {
    return <div className="filter">Too many matches, specify another filter</div>;
  }

  else if (displayCountries.length <= 10 && displayCountries.length > 1) {
    return (
      <>
        <div className="filter">
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
        <CountryDetails country={displayCountries[0]} />
      </div>
    )
  }
}

export default Filter;