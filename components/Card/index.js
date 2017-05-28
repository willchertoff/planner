import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Card.css';

const Card = props => (
  <div
    className={cx(s.root, props.className)}
  >
    <div className={s.container}>
      <span className={s.title} >{props.title}</span>
      <div className={s.people}>
        <span className={s.dates} >{props.dates}</span>
        {
          props.people.map(people =>
            <img
              key={people.name}
              className={s.image}
              src={people.image}
              alt={`${people.name}'s' headshot`}
            />,
          )
        }
      </div>
    </div>
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  dates: PropTypes.string,
  people: PropTypes.arrayOf(PropTypes.object),
};

export default Card;
