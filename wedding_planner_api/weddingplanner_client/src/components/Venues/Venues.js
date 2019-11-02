import React, { Component } from 'react'
import axios from 'axios'
import Search from './Search'

export default class Venues extends Component {
    constructor() {
        super();
        this.state = {
            latlong: '',
            venues: []
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation = () => {
        navigator.geolocation.getCurrentPosition(response => {
            console.log(response)
            
            this.setState({
                latlong: response.coords.latitude + "," + response.coords.longitude
            }, () => {
                console.log(this.state)
                this.getVenues()
            })
        })
    }

    getVenues = (query) => {
        const endPoint = "https://api.foursquare.com/v2/venues/explore?";
        const params = {
            client_id: "DNUTD4524VMKVMH4JQKVGX3MTG2FY0W05FF4EB2AITOUAM4F",
            client_secret: "ENS5BDBF0ZJEB5XIFA0OCAP5GTJWSSCBMGB35EL1V0KV2AK2",
            ll: this.state.latlong,
            //near: "Atlanta, GA",
            query: query,
            v: "20192810"
        }
        axios.get(endPoint + new URLSearchParams(params)).then(response => {
            // this.setState({
            //     venues: response.data.response.groups[0].items
            // })
            console.log(response.data)

        })
    }


    render() {
        return (
            <div>
                <Search getVenues={this.getVenues} />
                <ul>
                    {this.state.venues.map(venue => {
                        return (
                            <li key={venue.venue.name}>{venue.venue.name} Location: {venue.venue.location.address}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
