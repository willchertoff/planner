import React, { Component, PropTypes } from 'react';
import Loader from 'halogen/PulseLoader';

import Layout from '../../components/Layout';
import s from './styles.css';

/* Components */
import Search from '../../components/Search';
import Button from '../../components/Button';
import Card from '../../components/Card';
import Detail from '../../components/Detail';

/* Icons */
import newPlanIcon from './new-plan-icon.svg';

/* Data */
import firebase from './data';

/* Helpers */
const emptyString = str => str.length === 0;
const search = (term, dat) =>
  dat.filter(d =>
    d.title.toLowerCase().indexOf(term.toLowerCase()) !== -1,
  );

/* DataPresentation */
const renderTrips = (trps, active) =>
  trps.map(trip =>
    <Card
      id={trip.id}
      active={trip.id === active}
      key={trip.id}
      title={trip.title}
      dates={trip.date}
      people={trip.people}
    />,
  );

/* eslint-disable no-confusing-arrow */
const searchAndRenderTrips = finder =>
  emptyString(finder) ? (
    group =>
      renderTrips(group.trips, group.active)
  ) : (
    group =>
      renderTrips(search(finder, group.trips), group.active)
  );

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

    const currentTrip = this.state.trips[id - 1];

    const renderCardContent = () =>
      this.state.trips.length === 0 ? (
        <div className={s.loader}>
          <Loader color="#F4EBE5" size="12px" margin="4px" />
        </div>
      ) : (
        searchAndRenderTrips(this.state.searchTerm)(cardData)
      );

    const renderDetail = () =>
      this.state.trips.length === 0 ? (
        ''
      ) : (
        <Detail
          location={currentTrip.location}
          temp={currentTrip.temp}
        />
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
          {renderDetail()}
        </div>
      </Layout>
    );
  }
}
export default MyTrip;
