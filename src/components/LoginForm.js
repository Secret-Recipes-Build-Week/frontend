import { useState, useEffect } from "react";
import styled from "styled-components";
import * as yup from "yup";
import schema from "../validation/loginFormSchema";
import axios from "axios";
import { useHistory } from "react-router-dom";

// ** STYLING RULES BEGIN HERE ** //

const FormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
`;

const FormLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormHeaderWrapper = styled.header`
  background-color: blanchedalmond;
  padding: 0.5rem;
  border-bottom: 1px solid black;
`;

const buttonStyleObject = {
  padding: "0.5rem",
  margin: "0.5rem",
};

const labelStyleObject = {
  margin: "0.5rem",
  padding: "1rem",
};

const inputStyleObject = {
  margin: "0.5rem",
  backgroundColor: "mistyrose",
};

// const checkboxStyleObject = {
//   textAlign: "center",
//   margin: "1rem",
//   padding: "0.2rem",
//   fontWeight: "bold",
// };

// ** COMPONENT LOGIC BEGINS HERE **//

const initialFormValues = {
  email: "rloweth9@intel.com",
  password: "MH8A0GkaOkQU",
  // doRemember: false
};

const initialFormErrors = {
  email: "",
  password: "",
};

const initialDisabled = true;

export default function LoginForm() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errorValues, setErrorValues] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const { push } = useHistory();
  console.log(formValues);

  // ** SUBMIT FUNCTIONS START HERE ** //

  // Helper function. Empty shell for Axios call and state handlers. //
  const submit = () => {
    console.log(
      "Submitting values, clearing errors and setting new form values..."
    );
    //post here.

    axios
      .post(
        "https://familyrecipe-app-backend.herokuapp.com/api/auth/login",
        formValues
      )
      .then((res) => {
        //   console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        console.log(res.data.id);
        push("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });

    //then set initial error values.
    // setErrorValues(initialFormErrors);
    //then set initial form values.
    // setFormValues(initialFormValues);
    // console.log("Hey Dev Team!! Add a POST CALL here!");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    submit();
  };

  // ** CHANGE FUNCTIONS START HERE  ** //

  // Function to update state with changed values. //
  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrorValues({
          ...errorValues,
          [name]: "",
        });
      })
      .catch((err) => {
        setErrorValues({
          ...errorValues,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  // Function to check type of value + call the value updater. //

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    inputChange(name, valueToUse);
  };

  // Hook to check validation values against button enablement, e.g. each time values change in state. //
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <FormWrapper>
      <div className="form">
        <form onSubmit={onSubmit}>
          <FormHeaderWrapper>
            <h1>Family Secrets: Login</h1>
          </FormHeaderWrapper>

          <div className="errors">
            <div className="error">{errorValues.name}</div>
            <div className="error">{errorValues.size}</div>
            <div className="error">{errorValues.email}</div>
          </div>

          <FormLabelWrapper>
            <label className="label" style={labelStyleObject}>
              {" "}
              Email
              <input
                style={inputStyleObject}
                type="email"
                onChange={onChange}
                name="email"
                value={formValues.email}
              />
            </label>
          </FormLabelWrapper>

          <FormLabelWrapper>
            <label className="label" style={labelStyleObject}>
              {" "}
              Password
              <input
                style={inputStyleObject}
                type="password"
                onChange={onChange}
                name="password"
                value={formValues.password}
              />
            </label>
          </FormLabelWrapper>

          {/* <label className="label" style={checkboxStyleObject}>
            {" "}
            remember me
            <input
              style={inputStyleObject}
              type="checkbox"
              onChange={onChange}
              name="doRemember"
              value={formValues.doRemember}
            />
          </label> */}

          <button
            style={buttonStyleObject}
            className="submit"
            disabled={disabled}
          >
            submit
          </button>
        </form>
      </div>
    </FormWrapper>
  );
}
