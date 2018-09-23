//@flow

type InitialValues = {
  companyName: string,
  phoneNumber: string,
  courseName: string,
  courseDescription: string,
};

const initialValues = ({
  companyName = '',
  phoneNumber = '',
  courseName = '',
  courseDescription = '',
}: InitialValues) => ({
  companyName,
  phoneNumber,
  courseName,
  courseDescription,
});

export default initialValues;
