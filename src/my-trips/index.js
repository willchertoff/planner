import React, { Component, PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

/* Components */
import Search from '../../components/Search';
import Button from '../../components/Button';
import Card from '../../components/Card';

/* Icons */
import newPlanIcon from './new-plan-icon.svg';

/* Data */
import data from './data';

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
const curriedRenderTrips = finder =>
  emptyString(finder) ? (
    group =>
      renderTrips(group.trips, group.active)
  ) : (
    group =>
      renderTrips(search(finder, group.trips), group.active)
  );

class MyTrip extends Component {

  static propTypes = {
    trips: PropTypes.arrayOf(PropTypes.object),
    route: PropTypes.objectOf(PropTypes.any),
  }

  static defaultProps = {
    trips: data,
  }

  constructor(props) {
    super(props);
    this.state = {
      trips: props.trips,
      searchTerm: '',
    };
  }

  onSearch = (e) => {
    this.setState({
      searchTerm: e.target.value,
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

    return (
      <Layout className={s.content}>
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
          {
            curriedRenderTrips(this.state.searchTerm)(cardData)
          }
        </div>
      </Layout>
    );
  }

}
export default MyTrip;
