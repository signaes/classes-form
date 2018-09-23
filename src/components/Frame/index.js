//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import StyledFrame from './styles';

type Props = {
  className?: string,
  children: React.Node
};

const Frame = (
  { className = '', children }: Props
) => (
  <StyledFrame id="frame" className={`frame ${className}`}>
    <header></header>
    <div className="bound">
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
