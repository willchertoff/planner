import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Card.css';

/* Components */
import Link from '../Link';
import Ovals from '../Ovals';
import Button from '../Button';

const Card = props => (
  <Link to={`/trips/${props.id}`}>
    <div
      className={cx(s.root, props.className, props.active ? s.active : '')}
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
        <Button className={s.menu}>
          <Ovals fill="#C0C3C9" />
        </Button>
      </div>
    </div>
  </Link>
);

Card.propTypes = {
  className: PropTypes.string,
  id: PropTypes.number,
  title: PropTypes.string,
  dates: PropTypes.string,
  people: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.bool,
};

export default Card;
