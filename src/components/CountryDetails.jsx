function CountryDetails(props) {
  return (
    <div>
      <h1>{props.country.name.common}</h1>
      <p>
        capital {props.country.capital}<br />
        populaton {props.country.population}
      </p>
      <h2>languages</h2>
      <ul>
        {Object.keys(props.country.languages).map((key, value) => <li key={key}>{props.country.languages[key]}</li>)}
      </ul>
      <img src={props.country.flags.png} alt="Flag" />
    </div>
  )
}

export default CountryDetails
