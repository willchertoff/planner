import React, { Component, PropTypes } from 'react';
import Logo from './Logo';
import s from './SideBar.css';

/* Components */
import Nav from '../Nav';

export default class SideBar extends Component {
  static propTypes = {
    links: PropTypes.array,
  }

  render() {
    const {
      links,
    } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.logo}>
            <Logo />
          </div>
          <Nav
            links={links}
          />
        </div>
      </div>
    );
  }
}
