import React, { Component, PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

/* Components */
import Search from '../../components/Search';
import Button from '../../components/Button';

/* Icons */
import newPlanIcon from './new-plan-icon.svg';


/* Data */
import jack from './jack.png';
import jason from './jason.png';
import john from './john.png';
import mark from './mark.png';

const trips = [
  {
    id: 0,
    title: 'Team holiday Trip to The Jewel of Java',
    location: 'Kulon Progo',
    date: '15 May - 23 May 2016',
    peaople: [
      {
        id: 0,
        name: 'John',
        image: john,
      },
      {
        id: 2,
        name: 'Jack',
        image: jack,
      },
      {
        id: 3,
        name: 'Jason',
        image: jason,
      },
      {
        id: 4,
        name: 'Mark',
        image: mark,
      },
    ],
  },
];

class MyTrip extends Component {

  static propTypes = {
    trips: PropTypes.arrayOf(PropTypes.object),
  }

  static defaultProps = {
    trips,
  }

  constructor(props) {
    super(props);
    this.state = {
      trips: props.trips,
    };
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={s.container} >
          <Search
            placeholder="Search.."
            className={s.input}
          />
          <Button
            className={s.button}
          >
            <img src={newPlanIcon} alt="new plan icon" />
          </Button>
        </div>
      </Layout>
    );
  }

}
export default MyTrip;
