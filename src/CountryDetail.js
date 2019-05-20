import React, { Component } from 'react'
import Axios from 'axios';

class CountryDetail extends Component {
  state = {
    country: null
  }

 componentDidMount() {
   let country = this.props.match.params.name
   Axios.get('https://restcountries.eu/rest/v2/name/' + country)
   .then(res => {
     this.setState({
       country: res.data[0]
     })
     console.log(res.data[0])
   })
 };

  render() {
    const country = this.state.country ? (
      <div>
          <h4>Name: {this.state.country.name}</h4>
          <p>Population: {this.state.country.population}</p>
         
      </div>
    ) : (
        <div>Loading country..</div>
    )
    return (
     
      <div>
       {country}
      </div>
    )
  }
}

export default CountryDetail