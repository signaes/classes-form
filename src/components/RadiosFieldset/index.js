//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from '../ErrorDisplay/index';
import StyledRadiosFieldset from './styles';

type Props = {
  name: string,
  label: string,
  className?: string,
  placeholder?: string,
  errors: Object,
  touched: Object,
  children?: React.Node,
  options: Array<Object>,
};

const Fieldset = ({
  name,
  label,
  className = '',
  placeholder = '',
  errors,
  children,
  touched,
  options,
}: Props) => (
  <StyledRadiosFieldset>
    <legend className="radios-fieldset__label">{ label }</legend>
      <div className="radios-fieldset__options">
      { options.map(({ value, label, checked = null }, index) => (
        <label
          key={`${index}-${value}`}
          htmlFor={value}
          className="radios-fieldset__option">
          <input
            className="radios-fieldset__option__input"
            type="radio"
            id={value}
            value={value}
            checked={checked}
            name={name} />
          <span className="radios-fieldset__option__label">
            { label }
          </span>
        </label>
      )) }
      </div>
    <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
  </StyledRadiosFieldset>
);

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Fieldset;
