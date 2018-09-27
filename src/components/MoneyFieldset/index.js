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

const MoneyFieldset = ({
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
      placeholder={placeholder}
      type="string"
    />
  </FieldsetPrototype>
);

MoneyFieldset.propTypes = {
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

export default MoneyFieldset;
