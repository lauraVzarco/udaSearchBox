import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import Modal from './Modal.js';
import SearchButton from './SearchButton';
import { getToken } from '../services/auth.js';
import PropTypes from 'prop-types';
import '../stylesheets/style.css';
import {SearchBox, imputIconsBox } from '../stylesheets/StylesSearchBox';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesActive: true,
      cadastreActive: false,
      modalIsOpen: true,
      lat: null,
      lng: null,
      token: '',
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeCadastre = this.onChangeCadastre.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then((res) => {
        const authToken = res.data.authToken;
        this.setState({ token: authToken }, () => console.log('token', this.state.token));
      })
  }

  onChangeHandler(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng,
      // style:false,
    })
    this.props.onChange(lat, lng)
  }

  onChangeCadastre(e) {
    console.log('cadastre');
  }

  onSubmitHandler() {
    const lat = this.state.lat;
    const lng = this.state.lng;
    console.log('lat,lng', lat, lng)
  }

  onClickHandlerPlaces(e) {
    this.setState({
      placesActive: true,
      cadastreActive: false,
    })
  }

  onClickHandlerCadastre() {
    this.setState({
      placesActive: false,
      cadastreActive: true,
    })
  }

  onCloseModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const {
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      onSubmit,
      configPlaces,
      configCadastre,
    } = this.props.config;

    return (
      <div style={SearchBox}>
        <div style={imputIconsBox}>
          {((this.state.placesActive && placesOn) || (!cadastreOn)) && <Places
            placeholder={placeholderPlaces}
            config={configPlaces}
            onChangeHandler={this.onChangeHandler}
          />}
          {((this.state.cadastreActive && cadastreOn) || (!placesOn && cadastreOn)) && <Cadastre
            placeholder={placeholderCadastre}
            config={configCadastre}
          />}
          <IconInput
            statusPlaces={placesOn}
            statusCadastre={cadastreOn}
            placesActive={this.state.placesActive}
            cadastreActive={this.state.cadastreActive}
            onClickHandlerPlaces={this.onClickHandlerPlaces}
            onClickHandlerCadastre={this.onClickHandlerCadastre}
          />
        </div>
        <SearchButton
          config={configCadastre}
          onSubmitHandler={this.onSubmitHandler}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Modal 
          placesStatus={this.state.placesActive}
          cadastreStatus={this.state.cadastreActive}
          modalStatus={this.state.modalIsOpen}
          onCloseModal={this.onCloseModal}
        />
      </div>
    );
  }
}

    UdaSearchBox.PropTypes= {
      placesActive: PropTypes.bool,
      cadastreActive: PropTypes.bool,
      lat: PropTypes.number,
      lng: PropTypes.number,
      token: PropTypes.string
    };


export default UdaSearchBox;

