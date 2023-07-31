import React from "react";
import { useFormik } from "formik";

export default function App() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      alert(`LOGIN SUCCESSFUL`);
    },
    validate: (values) => {
      const errors = {};
      if (!values.Name) {
        errors.Name = "Required";
      } else if (values.Name.length > 15) {
        errors.Name = "Must be 15 characters or less";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password =
          "Set Passwords using #,@,Numbers,upper & lowercase letters";
      }
      return errors;
    }
  });

  return (
    <div style={{ backgroundColor: "red", width: "230px", minHeight: "180px" }}>
      <div
        style={{
          padding: "10px 15px",

          textAlign: "center",
          color: "black"
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="Name"> User Name:</label>
            <input
              id="Name"
              name="Name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.Name}
            />
          </div>
          {formik.errors.Name ? <div>{formik.errors.Name}</div> : null}

          <label htmlFor="email"> EmailId </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <div>
            <label for="passowrd">Password </label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          {formik.errors.password ? <div>{formik.errors.password}</div> : null}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
