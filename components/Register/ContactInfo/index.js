import React from "react";
import { Formik, Form, Field } from "formik";

export const ContactInfo = ({props}) => {
  return (
    <>
      <h4>Contact Details</h4>
      <Field
        className="form-control"
        type="text"
        name="twitterHandle"
        placeholder="Twitter Username"
        value={props.values.twitterHandle}
        onChange={props.handleChange}
      />

      <Field
        className="form-control"
        type="text"
        name="linkedinHandle"
        placeholder="Linkedin Username"
        value={props.values.linkedinHandle}
        onChange={props.handleChange}
      />
    </>
  );
};
