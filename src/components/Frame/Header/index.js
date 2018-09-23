//@flow
import React from 'react';
import PropTypes from 'prop-types';
import logo from './logo';
import StyledHeader from './styles';

type Props = {
  className: string,
  isFixed: boolean,
};

const Header = ({ className = '', isFixed }: Props) => (
  <StyledHeader className={className} isFixed={isFixed}>
    <div>
      <a href="/">
        <img className="logo" src={logo} alt="Homeroom" />
      </a>
    </div>
    <menu className="menu">
      <li className="menu__item"><a href="">Log in</a></li>
      <li className="menu__item"><a href="">Signup</a></li>
    </menu>
  </StyledHeader>
);

Header.propTypes = {
  className: PropTypes.string,
  isFixed: PropTypes.bool,
};

export default Header;
