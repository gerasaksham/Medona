import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { lat, long } from './Map'


const mapStyles = {
    width: '100%',
    height: '100%'
};

class Demo1 extends Component {
    constructor() {
        super();
        this.state = {
            name: "React",


        };
    }



    render() {
        return (
            <div>
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                        lat: lat,
                        lng: long
                    }}
                >
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'This is test name'}
                    />
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'No_key'
})(Demo1);