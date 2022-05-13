import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { TrashIcon } from "@heroicons/react/solid";

export const HigherEducation = ({ props }) => {
  return (
    <>
      {/* POSTGRADUATION */}
      <FieldArray name="higherEducation">
        {({ insert, remove, push }) => {
          const { higherEducation } = props.values;
          return (
            // <></>
            <div className="">
              <h1 className="">Higher Education</h1>
              {higherEducation.length >= 0 &&
                higherEducation.map((higherEducation, index) => (
                  <div className="" key={index + 1}>
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Course"
                      name={"higherEducation.${index}.course"}
                    />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Year"
                      name={"higherEducation.${index}.year"}
                    />
                    <Field
                      type="text"
                      className="form-control"
                      placeholder="Institute"
                      name={"higherEducation.${index}.institute"}
                    />
                    <button
                      type="button"
                      className="close-btn"
                      onClick={() => remove(index)}
                    >
                      <TrashIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                ))}
              <button
                type="button"
                className=""
                onClick={() =>
                  push({
                    course: "",
                    year: "",
                    institute: "",
                  })
                }
              >
                +
              </button>
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};
