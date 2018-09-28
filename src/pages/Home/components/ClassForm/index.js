//@flow
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import validationSchema from './validationSchema';
import initialValues from './initialValues';
import Fieldset from '../../../../components/Fieldset/index';
import PhoneNumberFieldset from '../../../../components/PhoneNumberFieldset/index';
import MoneyFieldset from '../../../../components/MoneyFieldset/index';
import RadiosFieldset from '../../../../components/RadiosFieldset/index';
import CheckboxesSelect from '../../../../components/CheckboxesSelect/index';
import WeekdaysPicker from '../../../../components/WeekdaysPicker/index';
import Calendar from '../../../../components/Calendar/index';
import Button from '../../../../components/Button/index';
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
          {({ errors, touched, setFieldValue, setFieldTouched }) => (
            <Form>
              <div className="row">
                <Fieldset
                  name="companyName"
                  label="Company Name"
                  errors={errors}
                  touched={touched}
                  placeholder="Type the Company Name"
                />
                <PhoneNumberFieldset
                  name="phoneNumber"
                  label="Phone Number"
                  errors={errors}
                  touched={touched}
                  placeholder="(000) 000-0000"
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
                <MoneyFieldset
                  name="classCost"
                  label="Class Cost ($)"
                  type="number"
                  errors={errors}
                  touched={touched}
                  placeholder="0.00"
                />
                <MoneyFieldset
                  name="materialsFee"
                  label="Materials Fee ($)"
                  errors={errors}
                  touched={touched}
                  placeholder="0.00"
                />
                <CheckboxesSelect
                  name="grade"
                  label="Grade"
                  placeholder="Select grade"
                  errors={errors}
                  touched={touched}
                  onChange={setFieldValue}
                  onBlur={setFieldTouched}
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
                  label="Min Enrollment (in weeks)"
                  errors={errors}
                  touched={touched}
                  type="number"
                  placeholder="1"
                />
                <Fieldset
                  name="maxEnrollment"
                  label="Max Enrollment (in weeks)"
                  errors={errors}
                  touched={touched}
                  type="number"
                  placeholder="1"
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
                        { label: 'Mon', value: 'Mon-03:15-04:15', id: 'Mon' },
                        { label: 'Wed', value: 'Wed-03:15-04:15', id: 'Wed' },
                        { label: 'Fri', value: 'Fri-03:15-04:15', id: 'Fri' },
                      ]
                    },
                    {
                      range: ['04:45', '05:45'],
                      days: [
                        { label: 'Mon', value: 'Mon-04:45-05:45', id: 'Mon' },
                        { label: 'Tue', value: 'Tue-04:45-05:45', id: 'Tue' },
                        { label: 'Thu', value: 'Thu-04:45-05:45', id: 'Thu' },
                      ]
                    }
                  ]}
                />
              </div>
              <div className="row">
                <RadiosFieldset
                  label="Frequency you want to offer your class"
                  name="frequency"
                  errors={errors}
                  touched={touched}
                  options={[
                    { value: 'once', label: 'Once a week', checked: true },
                    { value: 'twice', label: 'Twice a week' },
                  ]}
                />
              </div>
              <div className="row align-right">
                <Button onClick={console.log}>Submit</Button>
              </div>
              <p className="row align-right">
                <small>Complete this form for each Class you wish to teach.</small>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <aside className="col">
        <header>
          <h1 className="frame__title">Season Information</h1>
        </header>
        <div></div>
        <Calendar />
      </aside>
    </main>
  </StyledClassForm>
);

ClassForm.propTypes = {
  siteName: PropTypes.string.isRequired,
  availableHours: PropTypes.string.isRequired,
};

export default ClassForm;
