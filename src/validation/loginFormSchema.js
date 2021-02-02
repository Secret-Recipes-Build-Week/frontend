import * as yup from "yup";

export default yup.object().shape({
    email: yup
    .string()
    .email()
    .required("Email is required to log in."),
    password: yup
    .string()
    .required("must provide valid password to log in.")
    .min(5, "password must be 5 characters long"),
    doRemember: yup
    .boolean()
})