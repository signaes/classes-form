//@flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'formik';
import MaskedInput from 'react-text-mask';
import FieldsetPrototype from '../FieldsetPrototype/index';

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

const PhoneNumberFieldset = ({
  name,
  label,
  className = '',
  placeholder = '',
  errors,
  component = 'input',
  children,
  touched,
}: Props) => (
  <FieldsetPrototype name={name} label={label} errors={errors} touched={touched}>
    <Field
      name={name}
      component={component}
      placeholder={placeholder}
      render={({ field }) => (
        <MaskedInput
          {...field}
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder={placeholder}
          guide={false}
          id={name}
        />
      )}
    />
  </FieldsetPrototype>
);

PhoneNumberFieldset.propTypes = {
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

export default PhoneNumberFieldset;
