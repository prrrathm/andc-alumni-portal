import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";

export const WorkExperience = ({props}) => {
  return (
    <>
      {/* Employment */}
      <FieldArray name="workExperience">
        {({ insert, remove, push }) => {
          const { workExperience } = props.values;
          return (
            // <></>
            <div className="form-flex">
              <h1 className="">
                Work Experience
                <button
                  type="button"
                  className="add-btn btn btn-dark"
                  onClick={() =>
                    push({
                      currentOrg: -1,
                      type: "",
                      experience: "",
                      organisation: "",
                      profile: "",
                    })
                  }
                >
                  +
                </button>
              </h1>
              {workExperience.length >= 0 &&
                workExperience.map((workExperience, index) => (
                  <div className="form-box " key={index + 1}>
                    <button
                      type="button"
                      className="close-btn"
                      onClick={() => remove(index)}
                    >
                      x
                    </button>
                    <br />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Institue Email"
                      name={"workExperience.${index}.type"}
                    />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Course"
                      name={"workExperience.${index}.experience"}
                    />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Year"
                      name={"workExperience.${index}.organisation"}
                    />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Institute"
                      name={"workExperience.${index}.profile"}
                    />
                    {/* <div></div> */}
                  </div>
                ))}
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};
