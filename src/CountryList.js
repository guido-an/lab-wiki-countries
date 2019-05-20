import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CountryList extends Component {
  state = {
    countries: ""
  };

  componentDidMount = () => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all" // https://restcountries.eu/
      )
      .then(result => {
        console.log(result.data);
        this.setState({
          countries: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const countries = this.state.countries;
    const countryList = countries.length ? (
      countries.map(country => {
        return (
          <div key={country.alpha2Code}>
            <p>{country.name}</p>
            <Link to={"/" + country.name}>details</Link>
          </div>
        );
      })
    ) : (
      <p>Loading countries...</p>
    );

    return (
      <div className="country-list list-group container">
        {countryList}
      </div>
    );
  }
}

export default CountryList;
