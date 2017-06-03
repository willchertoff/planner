import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

/* Components */
import SideBar from '../SideBar';


class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={cx(s.layout, 'mdl-layout mdl-js-layout')} ref={node => (this.root = node)}>
        <div className={cx(s.inner, 'mdl-layout__inner-container')}>
          <main className={s.main}>
            <SideBar />
            <div {...this.props} className={this.props.className} />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
