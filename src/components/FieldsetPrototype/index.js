//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import ErrorDisplay from '../ErrorDisplay/index';
import StyledFieldset from './styles';

type Props = {
  name: string,
  label: string,
  errors: Object,
  touched: Object,
  children: React.Node,
};

const FieldsetPrototype = ({ name, label, errors, touched, children }: Props) => (
  <StyledFieldset>
    <label className="fieldset__label" htmlFor={name}>{ label }</label>
    { children }
    <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
  </StyledFieldset>
);

FieldsetPrototype.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default FieldsetPrototype;
