//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import ErrorDisplay from './components/ErrorDisplay/index';
import StyledFieldset from './styles';

type Props = {
  name: string,
  label: string,
  className?: string,
  placeholder?: string,
  errors: Object,
  touched: Object,
  component?: string,
  children?: React.Node,
};

const Fieldset = ({
  name,
  label,
  className = '',
  placeholder = '',
  errors,
  component = 'input',
  children,
  touched,
}: Props) => (
  <StyledFieldset>
    <label htmlFor={name}>{ label }</label>
    { children
      ? (
          <Field
            name={name}
            component={component}
            placeholder={placeholder}>
            { children }
          </Field>
        )
      : (
          <Field
            name={name}
            component={component}
            placeholder={placeholder}
          />
      ) }
    <ErrorDisplay errors={errors} touched={touched} fieldName={name} />
  </StyledFieldset>
);

Fieldset.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  component: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

export default Fieldset;
