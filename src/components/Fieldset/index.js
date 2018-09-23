//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from './components/ErrorDisplay/index';
import StyledFieldset from './styles';

type Props = {
  name: string,
  label: string,
  className?: string,
  errors: Object,
  touched: Object,
};

const Fieldset = ({ name, label, className = '', errors, touched }: Props) => (
  <StyledFieldset>
    <label htmlFor={name}>{ label }</label>
    <Field name={name} />
    <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
  </StyledFieldset>
);

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default Fieldset;
