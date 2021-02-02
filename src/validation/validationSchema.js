import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Name is a required field")
    .min(2, "Name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required field")
    .min(2, "Last name must be at least 2 characters"),
  email: yup.string().email().required("Email is a required field"),
  password: yup
    .string()
    .required("Please enter a password")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref("password")], "Password doesn't match"),
    }),
});

export default validationSchema;
