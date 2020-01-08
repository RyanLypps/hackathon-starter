import React from 'react';

export default class Geo extends React.Component {

    render() {
        return (
            <div className="container">
                <div>
                    <label>Latitude:</label>
                    <input type="text" placeholder={this.props.latitude}></input>
                    <label>Longitude:</label>
                    <input type="text" placeholder={this.props.longitude}></input>
                </div>
                <span>Your Position!</span>
            </div>
        );
    }
} 