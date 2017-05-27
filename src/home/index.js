import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

import jack from './jack.png';
import jason from './jason.png';
import john from './john.png';
import mark from './mark.png';

const myTrips = [
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

class HomePage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
      </Layout>
    );
  }

}

export default HomePage;
