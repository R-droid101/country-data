function CountryDetails(props) {
  return (
    <div className="filter">
      <h1>{props.country.name.common}</h1>
      <p>
        Capital: {props.country.capital}<br />
        Population: {props.country.population}
      </p>
      <h2>Languages</h2>
      <ul>
        {Object.keys(props.country.languages).map((key, value) => <li key={key}>{props.country.languages[key]}</li>)}
      </ul>
      <img src={props.country.flags.png} alt="Flag" />
    </div>
  )
}

export default CountryDetails