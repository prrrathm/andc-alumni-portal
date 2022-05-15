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
    <div className="">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
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
              currentOrg: "",
              title: "",
              startMonth: "",
              startYear: 0,
              endMonth: "",
              endYear: 0,
              organisation: "",
            },
          ],
          twitterHandle: "",
          linkedinHandle: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          console.log(values);
          // setSubmitting(false);
        }}
      >
        {(props) => (
          <Form className="bg-gray-100 p-8 rounded-lg">
            <BasicInfo props={props} />

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-300" />
              </div>
            </div>

            <HigherEducation props={props} />

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-300" />
              </div>
            </div>

            <WorkExperience props={props} />

            <div className="hidden sm:block" aria-hidden="true">
              <div className="py-5">
                <div className="border-t border-gray-300" />
              </div>
            </div>

            <ContactInfo props={props} />
            <br />
            <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
