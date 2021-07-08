import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper, InfoWindow, Circle } from 'google-maps-react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { getDefaultNormalizer, render } from '@testing-library/react';
import { MDBCard, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { Form, Button } from 'react-bootstrap';
import './Searchbar.css';
import axios from 'axios';
import './sidebar.css';
const google = window.google;
const style = {
  width: '80vw',
  height: '100vh',
  left: '310px',

}


export class MapCont extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // for google map places autocomplete
      address: '',
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
        lat: null,
        lng: null
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      setZoom: 10,
      mydata: [],

    }
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.Locate = this.Locate.bind(this);
  }

  componentDidMount() {
    this.getData()
  }
  async getData() {
    let resp = await axios.get(`/api/stores`)
    // console.warn(resp.data);
    this.setState({ mydata: resp.data.features });
  }
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  showPosition(position) {
    // console.log(position.coords.longitude);
    this.setState({
      mapCenter: {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    })
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      setZoom: 13
    });
  Locate(lati, longi) {
    this.setState({
      mapCenter: {
        lat: lati,
        lng: longi,
      },
      setZoom: 13,
    });
    console.log('clicked');
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    };
  }
  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    this.setState({ address });
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log('Success', latLng);

        // update center state
        this.setState({ mapCenter: latLng });
      })
      .catch(error => console.error('Error', error));
  };




  render() {
    const point = {
      lat: this.state.mapCenter.lat,
      lng: this.state.mapCenter.lng
    }
    const coords = { lat: this.state.mapCenter.lat, lng: this.state.mapCenter.lng };
    // const storess = this.state.mydata.features;
    return (

      <div id='googleMaps'>
        {/* AUTOCOMPLETE */}
        {console.log(this.state.mydata)}
        <PlacesAutocomplete
          value={this.state.address}
          onChange={this.handleChange}
          onSelect={this.handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <h4 className="heading" > FIND STORE: </h4>
              <Form.Control
                type='text'
                name='q'
                {...getInputProps({
                  placeholder: 'Search Places ...',
                  className: 'location-search-input mr-sm-2 ml-sm-5 frm',
                })}
              ></Form.Control>
              <Button type='submit'
                variant='outline-success'
                className='p-2' onClick={this.getLocation}>Locate Me</Button>

              {/* <select className='radius' >
                <option value="1km"  > 1 km </option>
                <option value="2km" > 2 km </option>
                <option value="5km" > 5 km </option>
                <option value="10km" > 10 km </option>
                <option value="50km" > 50 km </option>

              </select> */}
              <div className="autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item--active'
                    : 'suggestion-item';
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                  return (
                    <div
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>


        <Map
          google={this.props.google}
          initialCenter={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          center={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
          // onCenterChanged = { this.handleCenterChanged }
          style={style}
          zoom={this.state.setZoom}
          // bounds = { bounds}
          centerAroundCurrentLocation={true}
        >
          {this.state.mydata.map((stor) =>
            <Marker
              key={stor.properties.storeid}
              position={{
                lat: stor.geometry.coordinates[1],
                lng: stor.geometry.coordinates[0]
              }}
              onClick={this.onMarkerClick}
              name={stor.properties.name}
              description={stor.properties.hours}
            // animation={google.maps.Animation.DROP}
            />
          )}

          < Marker
            position={{
              lat: this.state.mapCenter.lat,
              lng: this.state.mapCenter.lng
            }}
            onClick={this.onMarkerClick}
            name={'Your current Location'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            onOpen={this.windowHasOpened}
            onClose={this.windowHasClosed}
            visible={this.state.showingInfoWindow}

          >
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              {/* <p>{this.state.selectedPlace.description}</p> */}
            </div>
          </InfoWindow>



          {/* <Circle
        radius={1200}
        center={coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => this.setState({
          setZoom : 15 })
        }
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      /> */}
        </Map>
        <div>
          <section className="sidebar" >
            <div className="sidebar-inner">

              <ul>
                {this.state.mydata.map(s =>
                  <li className="listitem ">Store : {s.properties.storeid}
                    <h3>{s.properties.name}</h3>
                    <p>{s.properties.phone}</p>
                    <p>{s.properties.hours}</p>
                    {/* {console.log(s.geometry.coordinates)} */}

                    < button className='btn btn2 btn-info' onClick={() => this.Locate(s.geometry.coordinates[1], s.geometry.coordinates[0])}> Locate

                    </button >
                  </li>
                )}
              </ul>


            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAhcqvAwBDwBt2_l9GSEfm9SPK1-wscFVs')
})(MapCont)