import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Button.css';

const Button = props =>
  <button onClick={props.onClick} className={cx(s.root, props.className)}>
    {props.children}
  </button>;

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
