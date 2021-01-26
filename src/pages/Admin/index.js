import React from "react";
import { Formik } from "formik";
import { TextField, Button } from "@material-ui/core";


const Admin = () => {
    const loginData = () => {
        return "balle";
    };
    console.log(JSON.stringify(loginData));

    const login = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(loginData),
        };
        const response = await fetch(
            "http://127.0.0.1:3500/api/v1/sign_in",
            requestOptions
        );
        const data = await response.json();
        console.log(data);
    };
    return (
      <div>
        <div>Hello from admin ballefaen!</div>
          <div>
          <Formik
            initialValues={{ Email: '', Password: '' }}
            onSubmit={(values, actions) => {
              console.log(values)

            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <div>
                <TextField
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="Email"
                />
                {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                </div>
                <div>
                  <TextField
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="Password"
                  />
                  {props.errors.name && <div id="feedback">{props.errors.name}</div>}
                </div>
                <div>
                <Button type="submit">Submit</Button>
                </div>
              </form>
            )}
          </Formik>
          </div>
      </div>
    )
};

export default Admin;
