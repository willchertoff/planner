import React, { Component, PropTypes } from 'react';
import firebase from '../../src/database';

/* Setup Firebase Grab */
const storage = firebase.storage();
const storageRef = storage.ref();
const imagesRef = storageRef.child('images');

class Image extends Component {
  static propTypes = {
    className: PropTypes.string,
    path: PropTypes.string,
    alt: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      src: '',
    };
  }

  componentWillMount() {
    imagesRef.child(this.props.path).getDownloadURL()
      .then((src) => {
        this.setState({
          src,
          loaded: true,
        });
      });
  }

  render() {
    const {
      className,
      alt,
    } = this.props;

    return (
      <img
        className={className}
        alt={alt}
        src={this.state.src}
        style={{
          opacity: this.state.loaded ? 1 : 0,
        }}
      />
    );
  }
}

export default Image;
