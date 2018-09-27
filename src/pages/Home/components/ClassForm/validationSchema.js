//@flow
import * as Yup from 'yup';

const messages = {
  required(fieldName: string): string {
    return `${fieldName} is required`;
  },
  tooShort(fieldName: string, min: number): string {
    return `${fieldName} should have at least ${min} characters`;
  },
  tooLong(fieldName: string, min: number): string {
    return `${fieldName} should no more than ${min} characters`;
  }
};

const fieldNames = {
  companyName: 'Company name',
  phoneNumber: 'Phone number',
  courseName: 'Course name',
  courseDescription: 'Course description',
};

const patterns = {
  companyName: {
    regex: /^(?!\s)([\W\w\s](?!\s{2,})(?!\s{1,}$)){2,50}(?!\s)$/,
    explanation: 'The company name should have between 2 and 50 characters, no duplicate spaces or spaces around',
  },
  phoneNumber: {
    regex: /^\(\d{3}\)\s{1}\d{3}-\d{4}$/,
    explanation: 'The phone number should have the following format: "(000) 000-0000"',
  },
  courseName: {
    regex: /^(?!\s)([\W\w\s](?!\s{2,})(?!\s{1,}$)){4,50}(?!\s)$/,
    explanation: 'The course name should have between 4 and 50 characters, no duplicate spaces or spaces around',
  },
  courseDescription: {
    regex: /^(?!\s)([\W\w\s](?!\s{2,})(?!\s{1,}$)){10,100}(?!\s)$/,
    explanation: 'The course description should have between 10 and 100 characters, no duplicate spaces or spaces around',
  },
};

const validationSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(2, messages.tooShort(fieldNames.companyName, 2))
    .max(50, messages.tooLong(fieldNames.companyName, 50))
    .required(messages.required(fieldNames.companyName))
    .test(
      fieldNames.companyName,
      patterns.companyName.explanation,
      value => patterns.companyName.regex.test(value)
    ),
  phoneNumber: Yup.string()
    .required(messages.required(fieldNames.phoneNumber))
    .test(
      fieldNames.phoneNumber,
      patterns.phoneNumber.explanation,
      value => patterns.phoneNumber.regex.test(value)
    ),
  courseName: Yup.string()
    .min(4, messages.tooShort(fieldNames.courseName, 4))
    .max(50, messages.tooLong(fieldNames.courseName, 50))
    .required(messages.required(fieldNames.courseName))
    .test(
      fieldNames.courseName,
      patterns.courseName.explanation,
      value => patterns.courseName.regex.test(value)
    ),
  courseDescription: Yup.string()
    .min(10, messages.tooShort(fieldNames.courseDescription, 10))
    .max(100, messages.tooLong(fieldNames.courseDescription, 100))
    .required(messages.required(fieldNames.courseDescription))
    .test(
      fieldNames.courseDescription,
      patterns.courseDescription.explanation,
      value => patterns.courseDescription.regex.test(value)
    ),
});

export default validationSchema;
