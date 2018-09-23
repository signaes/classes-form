//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import StyledFrame from './styles';
import Header from './Header/index';

type Props = {
  className?: string,
  children: React.Node
};

const Frame = (
  { className = '', children }: Props
) => (
  <StyledFrame id="frame" className={`frame ${className}`}>
    <Header className="frame__header" isFixed/>
    <div className="frame__bound">
      { children }
    </div>
  </StyledFrame>
);

Frame.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string
};

export default Frame;
