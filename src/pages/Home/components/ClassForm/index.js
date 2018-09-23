//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import Fieldset from '../../../../components/Fieldset/index';
import StyledClassForm from './styles';

type Props = {
  siteName: string,
  availableHours: [],
};

const onSubmit = (values: Object) => {
  console.log(values)
};

const ClassForm = ({ siteName, availableHours }: Props) => (
  <StyledClassForm className="class-form">
    <header>
      <h1>{ siteName }</h1>
      <h2>You have been invited to lead a class!</h2>
      <p>Complete this form for each class you wish to teach.</p>
    </header>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="row">
            <Fieldset
              name="companyName"
              label="Company Name"
              errors={errors}
              touched={touched}
            />
            <Fieldset
              name="phoneNumber"
              label="Phone Number"
              errors={errors}
              touched={touched}
            />
            <Fieldset
              name="courseName"
              label="Course Name"
              errors={errors}
              touched={touched}
            />
          </div>
        </Form>
      )}
    </Formik>
  </StyledClassForm>
);

ClassForm.propTypes = {
  siteName: PropTypes.string.isRequired,
  availableHours: PropTypes.string.isRequired,
};

export default ClassForm;
