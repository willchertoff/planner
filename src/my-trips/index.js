/* eslint-disable no-confusing-arrow */
import React, { Component, PropTypes } from 'react';
import Loader from 'halogen/PulseLoader';

import Layout from '../../components/Layout';
import s from './styles.css';

/* Components */
import Search from '../../components/Search';
import Button from '../../components/Button';
import Detail from '../../components/Detail';
import Tasks from './tasks';

/* Icons */
import newPlanIcon from './new-plan-icon.svg';

/* Data */
import firebase from '../database';

/* Helpers */

import {
  searchAndRenderTrips,
} from './helpers';

class MyTrip extends Component {
  static propTypes = {
    route: PropTypes.objectOf(PropTypes.any),
  }
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      trips: [],
    };
  }
  componentWillMount = () => {
    this.tripsRef = firebase.database().ref('/trips/');
    this.tripsRef.on('child_added', (data) => {
      this.setState({
        trips: this.state.trips.concat(data.val()),
      });
    });
  }
  componentWillUnmount = () => {
    this.tripsRef.off();
  }
  onSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  }
  updateData = (data) => {
    this.setState({
      trips: data,
    });
  }

  render() {
    const { route } = this.props;
    const { params } = route;
    const { id } = params;

    const cardData = {
      trips: this.state.trips,
      active: parseInt(id, 0),
    };

    const renderCardContent = () =>
      this.state.trips.length === 0 ? (
        <div className={s.loader}>
          <Loader color="#F4EBE5" size="12px" margin="4px" />
        </div>
      ) : (
        searchAndRenderTrips(this.state.searchTerm)(cardData)
      );

    return (
      <Layout>
        <div className={s.content}>
          <div className={s.container} >
            <Search
              placeholder="Search.."
              className={s.input}
              onChange={this.onSearch}
              value={this.state.searchTerm}
            />
            <Button
              className={s.button}
            >
              <img src={newPlanIcon} alt="new plan icon" />
            </Button>
          </div>
          <div className={s.cards}>
            {renderCardContent()}
          </div>
        </div>
        <div className={s.detail}>
          <Detail
            trips={this.state.trips}
            activeTrip={parseInt(id, 0)}
          >
            <Tasks
              activeTrip={parseInt(id, 0)}
            />
          </Detail>
        </div>
      </Layout>
    );
  }
}
export default MyTrip;
