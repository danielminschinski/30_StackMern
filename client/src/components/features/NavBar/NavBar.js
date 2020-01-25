import React from 'react';
import MainMenu from '../../layout/MainMenu/MainMenu';
import Logo from '../../common/Logo/Logo';
import './NavBar.scss';

class NavBar extends React.Component {
  state = {
    links: [
      { path: '/', title: 'Home' },
      { path: '/posts/random', title: 'Random post' },
      { path: '/posts/new', title: 'Add post' },
      { path: '/posts', title: 'Posts' },
      { path: '/contact', title: 'Contact' },
    ],
  };

  render() {
    const { links } = this.state;

    return (
      <nav className="navbar">
        <Logo />
        <MainMenu links={links} />
      </nav>
    );
  }
}

export default NavBar;
