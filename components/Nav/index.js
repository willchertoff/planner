/* eslint-disable no-confusing-arrow */
import React from 'react';
import cx from 'classnames';
import s from './Navigation.css';

import Home from './Home.svg';
import Notif from './Notif.svg';
import Places from './Places.svg';
import Settings from './Settings.svg';
import Trip from './Trip.svg';

/* Components */
import Link from '../Link';

const location = window.location.pathname;
const activeLinkClass = (path, loc) => loc.includes(path) ? s.selected : '';

export default () =>
  <div className={s.root}>
    <Link to={'/trips/1'}>
      <div className={cx(s.link, activeLinkClass('/home', location))}>
        <img className={s.icon} src={Home} alt="icon" />
        <span>Home</span>
      </div>
    </Link>
    <Link to={'/trips/1'}>
      <div className={cx(s.link, activeLinkClass('/trips', location))}>
        <img className={s.icon} src={Trip} alt="icon" />
        <span>My Trips</span>
      </div>
    </Link>
    <Link to={'/trips/1'}>
      <div className={cx(s.link, activeLinkClass('/discover', location))}>
        <img className={s.icon} src={Places} alt="icon" />
        <span>Discover Places</span>
      </div>
    </Link>
    <Link to={'/trips/1'}>
      <div className={cx(s.link, activeLinkClass('/notifications', location))}>
        <img className={s.icon} src={Notif} alt="icon" />
        <span>Notifications</span>
      </div>
    </Link>
    <Link to={'/trips/1'}>
      <div className={cx(s.link, activeLinkClass('/settings', location))}>
        <img className={s.icon} src={Settings} alt="icon" />
        <span>Settings</span>
      </div>
    </Link>
  </div>;
