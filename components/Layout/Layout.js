import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

/* Components */
import SideBar from '../SideBar';


const links = [
  {
    title: 'Home',
    icon: 'Home',
    path: '/home',
  },
  {
    title: 'My Trip',
    icon: 'Trip',
    path: '/',
  },
  {
    title: 'Discover Places',
    icon: 'Places',
    path: '/map',
  },
  {
    title: 'Notifications',
    icon: 'Notif',
    path: '/notifications',
  },
  {
    title: 'Settings',
    icon: 'Settings',
    path: '/settings',
  },
];


class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className="mdl-layout mdl-js-layout" ref={node => (this.root = node)}>
        <div className={cx(s.inner, 'mdl-layout__inner-container')}>
          <main className={s.main}>
            <SideBar links={links} />
            <div {...this.props} className={this.props.className} />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
