function Filter(props) {
  const displayCountries = props.countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(props.displayDetails.toLowerCase())
  );

  if (displayCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  else if (displayCountries.length <= 10 && displayCountries.length > 1) {
    return (
      <>
        <div>
          {displayCountries.map((country) => (
            <div key={country.name.official}>{country.name.common}</div>
          ))}
        </div>
      </>
    );
  }

  else {
    return (
      <>
        <div>
          {displayCountries.map(country => {
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
          })}
        </div>
      </>
    )
  }
}

export default Filter;
