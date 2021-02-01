import react, {useState, useEffect} from 'react'
import styled from 'styled-components'
import * as yup from "yup";
import schema from "../validation/loginFormSchema"

const initialFormValues = {
    email: "",
    password: "",
    doRemember: false
};

const initialFormErrors = {
    email: "",
    password: ""
};

const initialDisabled = true;

export default function LoginForm() {
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ errorValues, setErrorValues ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)


    //** SUBMIT FUNCTIONS ** //


    // Helper function. Empty shell for Axios call and state handlers. //
    const submit = () => {
        console.log("Submitting values, clearing errors and setting new form values...")
        //post here.
        //then set initial error values.
        setErrorValues(initialFormErrors)
        //then set initial form values.
        setFormValues(initialFormValues)
        console.log("Hey Dev Team!! Add a POST CALL here!")
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        submit();
    };

    //** CHANGE FUNCTIONS  ** //


    // Function to update state with changed values. //
    const inputChange = (name, value) => {
        yup
        .reach(schema, name)
        .validate(value)
        .then(() => {
          setErrorValues({
            ...errorValues,
            [name]: "",
          })
        })
        .catch(err => {
          setErrorValues({
            ...errorValues,
            [name]: err.errors[0],
          })
        })
    
        setFormValues({
          ...formValues,
          [name]: value 
        })
    };

    // Function to check type of value + call the value updater. //

    const onChange = event => {
        const { name, value, type, checked } = event.target
        const valueToUse = type === "checkbox" ? checked : value;
        inputChange(name, valueToUse)
    }

    // Hook to check validation values against button enablement, e.g. each time values change in state. //
    useEffect(() => {
        schema.isValid(formValues).then(valid => setDisabled((!valid)))
      }, [formValues])
      


    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <h1>Log in to access family secrets.</h1>

                <div className="errors">
                    <div className="error">{errorValues.name}</div>
                    <div className="error">{errorValues.size}</div>
                    <div className="error">{errorValues.email}</div>
                </div>

                <h3>Input Secrets.</h3>
                <label className="label"> Email
                    <input
                    type="email"
                    onChange={onChange}
                    name="email"
                    value={formValues.email}
                    />
                </label>

                <label className="label"> Password
                    <input
                    type="password"
                    onChange={onChange}
                    name="password"
                    value={formValues.password}
                    />
                </label>

                <label className="label"> Remember me for next time.
                    <input
                    type="checkbox"
                    onChange={onChange}
                    name="doRemember"
                    value={formValues.doRemember}
                    />
                </label>


                
                <button className="submit" disabled={disabled}>Submit</button>
            </form>
            
        </div>
    )
}
