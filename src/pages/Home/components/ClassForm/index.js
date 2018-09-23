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
              placeholder="Type the Company Name"
            />
            <Fieldset
              name="phoneNumber"
              label="Phone Number"
              errors={errors}
              touched={touched}
              placeholder="000 0000 0000"
            />
            <Fieldset
              name="courseName"
              label="Course Name"
              errors={errors}
              touched={touched}
              placeholder="Type the Course Name"
            />
          </div>
          <div className="row">
            <Fieldset
              name="courseDescription"
              label="Course Description"
              errors={errors}
              touched={touched}
              component="textarea"
              placeholder="Short description of the course"
              isFullWidth
            />
          </div>
          <div className="row">
            <Fieldset
              name="classCost"
              label="Class Cost"
              errors={errors}
              touched={touched}
              placeholder="$000"
            />
            <Fieldset
              name="materialsFee"
              label="Materials Fee"
              errors={errors}
              touched={touched}
              placeholder="$000"
            />
            <Fieldset
              name="grade"
              label="Grade"
              errors={errors}
              touched={touched}
              placeholder="Select Grade"
            />
          </div>
          <div className="row">
            <Fieldset
              name="minEnrollment"
              label="Min Enrollment"
              errors={errors}
              touched={touched}
              placeholder="2 weeks"
            />
            <Fieldset
              name="maxEnrollment"
              label="Max Enrollment"
              errors={errors}
              touched={touched}
              placeholder="6 weeks"
            />
            <Fieldset
              name="registrationURL"
              label="Registration URL"
              errors={errors}
              touched={touched}
              placeholder="http://"
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
