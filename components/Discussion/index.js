import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Discussion.css';

const Discussion = props =>
  <div
    className={cx(s.root, props.className)}
  >
    <h3>{props.title}<span className={s.unread}>{` (${props.unread} Unread)`}</span></h3>
  </div>;

Discussion.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  unread: PropTypes.number,
};

export default Discussion;
