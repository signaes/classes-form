//@flow
import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  fill?: string
};

const Check = ({ fill = '#92C5B8' }: Props) => (
  <svg width="8px" height="6px" viewBox="0 0 8 6" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="check" fill={fill} fillRule="nonzero">
        <path d="M3.32387986,3.34802893 L6.39685209,0.275056697 C6.76359435,-0.0916855656 7.35820104,-0.0916855656 7.7249433,0.275056697 C8.09168557,0.641798959 8.09168557,1.23640565 7.7249433,1.60314791 L4.00218869,5.32590253 C3.73589142,5.5921998 3.34945404,5.66513447 3.01734776,5.54470655 C2.89371702,5.50128474 2.77724336,5.43115986 2.67681443,5.33417678 L0.286747926,3.02611638 C-0.0863390153,2.66583051 -0.0967163329,2.07131438 0.263569538,1.69822744 C0.623855409,1.3251405 1.21837154,1.31476318 1.59145848,1.67504905 L3.32387986,3.34802893 Z"></path>
      </g>
    </g>
  </svg>
);

Check.propTypes = {
  fill: PropTypes.string,
};

export default Check;
