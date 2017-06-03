import React from 'react';
import Logo from './Logo';
import s from './SideBar.css';

/* Components */
import Nav from '../Nav';

export default () =>
  <div className={s.root}>
    <div className={s.container}>
      <div className={s.logo}>
        <Logo />
      </div>
      <Nav />
    </div>
  </div>;
