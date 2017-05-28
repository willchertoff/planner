import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Task.css';

const Task = props =>
  <div
    className={cx(s.root, props.className)}
  >
    Task
  </div>;

Task.propTypes = {
  onChange: PropTypes.func,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Task;
