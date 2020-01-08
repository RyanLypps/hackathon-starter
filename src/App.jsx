import React, { Component } from 'react';
import axios from 'axios';
import GeoLocation from "./GeoLocation"

var result;
var result1;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: [],
            zomato: [],
            latitude: "",
        };
    }

    componentDidMount() {
        axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=87dbe059b4934d53b4f2a00aa6666c9c")
            .then(res => {
                result = Object.keys(res.data).map((key) => {
                    return [res.data[key]];
                });
                this.setState({ location: result });
            })

        this.getData();
    }
    getData() {
        setTimeout(() => {
            const config = { headers: { 'user-key': "657f74d66ed27968ed27db8b2fe1ddca" } };

            axios.get("https://developers.zomato.com/api/v2.1/geocode?lat=" + `${this.state.location[11]}` + "&lon=" + `${this.state.location[12]}`, config)
                .then(res => {
                    
                        result1 = Object.keys(res.data.nearby_restaurants[1].restaurant).map((key) => {
                            return [res.data.nearby_restaurants[1].restaurant[key]];
                        });

                    this.setState({ zomato: result1});

                })
        }, 500)
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Pokemon Eats</h1>
                <hr className="titleLine"></hr>
                <h3>Automatically gets you the nearest venue!</h3>
                <label>Name:</label>
                <ul> <li>{this.state.zomato[3]}</li></ul>
                <label>Type:</label>
                <ul> <li>{this.state.zomato[7]}</li></ul>
                <div>
                    <GeoLocation
                        addButton={this.componentDidMount}
                        latitude={this.state.location[11]}
                        longitude={this.state.location[12]}
                    />
                </div>
            </div>
        );
    }
} 