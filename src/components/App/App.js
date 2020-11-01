import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {
  // sets the state of gallery to an empty array for the data to be pushed to
  state = {
    gallery: [],
  };

  // mounts the GET call for on page display at page load
  componentDidMount() {
    this.getGallery();
  }

  // GET call to the server for the picture data
  getGallery = (event) => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
      .then((response) => {
        this.setState({
          gallery: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          errorMsg: 'Bad things are happening..',
        });
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        {/* renders the entire GalleryList component */}
        <GalleryList
          className="gallery"
          gallery={this.state.gallery}
          getCall={this.getGallery}
        />
      </div>
    );
  }
}

export default App;
