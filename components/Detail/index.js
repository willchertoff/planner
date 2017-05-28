import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Detail.css';

/* Components */
import Button from '../Button';
import Ovals from '../Ovals';

const Detail = props =>
  <div
    className={s.root}
  >
    <div className={s.title}>
      <span className={s.location}>{props.location}</span>
      <span className={s.temp}>{props.temp}<span className={s.cels}>C</span></span>
    </div>
    <div className={s.menu}>
      <Button className={s.button}>
        <Ovals fill="white" />
      </Button>
    </div>
    <div className={s.children}>
      {props.children}
    </div>
  </div>;

Detail.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string,
  temp: PropTypes.string,
};

export default Detail;
