import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Search.css';

const Search = props => (
  <input type="text" placeholder={props.placeholder} className={cx(s.root, props.className)} onChange={props.onChange} value={props.term} />
 );

Search.propTypes = {
  onChange: PropTypes.func,
  term: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default Search;
