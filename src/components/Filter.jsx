function Filter(props) {
    return (
        <div>
            {props.countries.map(country => <div key={country.name.official}>{country.name.common}</div>)}
        </div>
    )
}

export default Filter

