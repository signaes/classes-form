//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';

type Props = {
  className?: string,
  fieldName: string,
  errors: Object,
  touched: Object,
};

const ErrorDisplay = ({
  errors,
  touched,
  fieldName,
  className = ''
}: Props) =>
  errors[fieldName] && touched[fieldName]
    ? (<div className={className}>{ errors[fieldName] }</div>)
    : null;

ErrorDisplay.propTypes = {
  fieldName: PropTypes.string.isRequired,
  className: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
};

export default ErrorDisplay;
