import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import firebase from '../../src/my-trips/data';

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
          transition: 'opacity .4s ease',
        }}
      />
    );
  }
}

export default Image;
