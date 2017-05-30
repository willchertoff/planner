import React, { PropTypes } from 'react';
import s from './Detail.css';

/* Components */
import Button from '../Button';
import Ovals from '../Ovals';

/* Assets */
import bg from './bg.svg';

const Detail = (props) => {
  const {
    trips,
    activeTrip,
  } = props;
  const trip = trips.length > 0 ? (
    trips[activeTrip - 1]
  ) : (
    null
  );

  return (
    <div
      className={s.root}
    >
      <img src={bg} className={s.bg} alt="decoration" />
      {
        trip ? (
          <div className={s.title}>
            <span className={s.location}>{trip.location}</span>
            <span className={s.temp}>{trip.temp}<span className={s.cels}>C</span></span>
          </div>
        ) : (
          ''
        )
      }
      <div className={s.menu}>
        <Button className={s.button}>
          <Ovals fill="white" />
        </Button>
      </div>
      {props.children}
    </div>
  );
};

Detail.propTypes = {
  children: PropTypes.node,
  trips: PropTypes.arrayOf(PropTypes.object),
  activeTrip: PropTypes.number,
};

export default Detail;
