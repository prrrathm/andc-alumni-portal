import React from "react";
import { Formik, Form, Field } from "formik";

export const BasicInfo = ({props}) => {
  return (
    <>
      <Field
        className="form-control"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={props.values.firstName}
        onChange={props.handleChange}
      />
      <Field
        className="form-control"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={props.values.lastName}
        onChange={props.handleChange}
      />
      <Field
        className="form-control"
        type="text"
        name="course"
        placeholder="Course"
        value={props.values.course}
        onChange={props.handleChange}
      />
      <Field
        className="form-control"
        type="year"
        name="yearOfGraduation"
        placeholder="Year of Graduation"
        value={props.values.yearOfGraduation}
        onChange={props.handleChange}
      />
      <Field
        className="form-control"
        type="email"
        name="email"
        placeholder="Email"
        onChange={props.handleChange}
        value={props.values.email}
      />
    </>
  );
};
