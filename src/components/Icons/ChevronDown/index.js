//@flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  fill?: string,
  className?: string,
};

const ChevronDown = ({ fill = '#BDBEBF', className = '' }: Props) => (
  <svg width="9px" height="5px" viewBox="0 0 9 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" className={className}>
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path d="M4.49249732,4.92597179 C4.31914135,4.92681722 4.14651074,4.86104552 4.01615823,4.72974187 L0.193730202,1.13279981 C-0.0665438832,0.870626578 -0.0642775843,0.450707133 0.198811568,0.191280387 C0.466085073,-0.0667729712 0.886791739,-0.0623573023 1.14351378,0.196237967 L4.49249732,3.34766414 L7.84148086,0.196237967 C8.09820289,-0.0623573023 8.51890956,-0.0667729712 8.78618306,0.191280387 C9.04927222,0.450707133 9.05153851,0.870626578 8.79126443,1.13279981 L4.9688364,4.72974187 C4.8384839,4.86104552 4.66585328,4.92681722 4.49249732,4.92597179 Z" fill={fill} fillRule="nonzero"></path>
    </g>
  </svg>
);

ChevronDown.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
};

export default ChevronDown;
