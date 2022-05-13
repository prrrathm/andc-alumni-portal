import React, { useState } from "react";
import { BasicInfo } from "./BasicInfo";
import { HigherEducation } from "./HigherEducation";
import { WorkExperience } from "./WorkExperience";
import { ContactInfo } from "./ContactInfo";
// import "./forms.css";
import { Formik, Form, Field } from "formik";
// import { setActiveIndex } from "./dependencies/actions/setActiveIndex";

export const Register = () => {
  return (
    <div className="form-parent-box">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          yearOfGraduation: "",
          course: "",
          isPostGrad: "no",
          higherEducation: [
            {
              course: "",
              yearOfGraduation: 0,
              institute: "",
            },
          ],
          workExperience: [
            {
              currentOrg: -1,
              type: "",
              experience: "",
              organisation: "",
              profile: "",
            },
          ],
          twitterHandle: "",
          linkedinHandle: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          // setSubmitting(false);
        }}
      >
        {(props) => (
          <Form>
            <BasicInfo props={props} />
            <HigherEducation props={props} />
            <WorkExperience props={props} />
            <ContactInfo props={props} />
          </Form>
        )}
      </Formik>
      <button type="submit" className="btn btn-danger">
        Submit
      </button>
    </div>
  );
};
