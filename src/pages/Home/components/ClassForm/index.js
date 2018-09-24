//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import Fieldset from '../../../../components/Fieldset/index';
import CheckboxesSelect from '../../../../components/CheckboxesSelect/index';
import WeekdaysPicker from '../../../../components/WeekdaysPicker/index';
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
    <main>
      <div className="col">
        <header className="frame__header">
          <h1 className="frame__title">{ siteName }</h1>
          <h2 className="frame__header__subtitle">You have been invited to lead a class!</h2>
          <p className="frame__header__subtitle">Complete this form for each class you wish to teach.</p>
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
                <CheckboxesSelect
                  name="grade"
                  label="Grade"
                  placeholder="Select grade"
                  errors={errors}
                  touched={touched}
                  options={[
                    { label: 'K', value: 'k' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                  ]}
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
              <div className="row">
                <WeekdaysPicker
                  name="availableHours"
                  label="Available Hours"
                  errors={errors}
                  touched={touched}
                  availableDaysByHours={[
                    {
                      range: ['03:15', '04:15'],
                      days: [
                        { label: 'Mon', value: 'Mon-03:15-04:15' },
                        { label: 'Wed', value: 'Wed-03:15-04:15' },
                        { label: 'Fri', value: 'Fri-03:15-04:15' },
                      ]
                    },
                    {
                      range: ['04:45', '05:45'],
                      days: [
                        { label: 'Mon', value: 'Mon-04:45-05:45' },
                        { label: 'Wed', value: 'Wed-04:45-05:45' },
                        { label: 'Fri', value: 'Fri-04:45-05:45' },
                      ]
                    }
                  ]}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <aside className="col">
        <header>
          <h1 className="frame__title">Season Information</h1>
        </header>
      </aside>
    </main>
  </StyledClassForm>
);

ClassForm.propTypes = {
  siteName: PropTypes.string.isRequired,
  availableHours: PropTypes.string.isRequired,
};

export default ClassForm;
