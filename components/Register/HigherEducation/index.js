import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { TrashIcon, PlusIcon } from "@heroicons/react/solid";
import { yearList } from "../data";

export const HigherEducation = ({ props }) => {
  return (
    <>
      {/* POSTGRADUATION */}
      <FieldArray name="higherEducation">
        {({ insert, remove, push }) => {
          const { higherEducation } = props.values;
          return (
            <div className="">
              <div className="mt-10 sm:mt-0">
                <div className="grid grid-cols-1 md:grid md:grid-cols-3 md:gap-6">
                  <div className="md:col-span-1">
                    <div className="px-4 sm:px-0">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Higher Education
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Your Academic journey after ANDC.
                      </p>
                      <button
                        type="button"
                        className="my-2 bg-sky-700 rounded p-2 text-center text-slate-100  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ..."
                        onClick={() =>
                          push({
                            course: "",
                            year: "",
                            institute: "",
                          })
                        }
                      >
                        <PlusIcon
                          className="h-6 w-6 float-right"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>

                  <div className="md:mt-0 md:col-span-2">
                    {higherEducation.length >= 0 &&
                      higherEducation.map((higherEducation, index) => (
                        <div
                          className="my-5 shadow overflow-hidden sm:rounded-md"
                          key={index + 1}
                        >
                          <div className="px-4 py-2 bg-white   ">
                            <div className="sm:p-6 grid md:grid-cols-12 gap-6">
                              <div className="col-span-6 sm:col-span-3 ">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Course
                                </label>

                                <Field
                                  type="text"
                                  className="mt-1 py-2 block w-full px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                  placeholder="Course"
                                  name={`higherEducation.${index}.course`}
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Institute
                                </label>

                                <Field
                                  type="text"
                                  className="mt-1 py-2 block w-full px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                  placeholder="Institute"
                                  name={`higherEducation.${index}.institute`}
                                />
                              </div>
                              <div className="col-span-6 sm:col-span-3">
                                <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Year Of Graduation
                                </label>

                                <Field
                                  className="mt-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                  type="text"
                                  name={`higherEducation.${index}.year`}
                                  onChange={props.handleChange}
                                  as="select"
                                >
                                  <option value="" key="1" label="Year" />
                                  {yearList.map((year) => (
                                    <option
                                      value={year}
                                      key={year}
                                      label={year}
                                    />
                                  ))}
                                </Field>
                              </div>
                              <div className="grid col-span-6 sm:col-span-3 justify-items-center">
                                {/* <label
                                  htmlFor="last-name"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Last name
                                </label>
 */}
                                <button
                                  type="button"
                                  className="mt-1 pl-3 sm:text-sm float-right"
                                  onClick={() => remove(index)}
                                >
                                  <TrashIcon
                                    className="h-10 w-10 text-red-400 transition ease-in-out delay-120  hover:scale-110 hover:text-red-700 duration-300 ..."
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </FieldArray>
    </>
  );
};
