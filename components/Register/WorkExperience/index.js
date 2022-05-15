import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { TrashIcon, PlusIcon } from "@heroicons/react/solid";
import { yearList, months } from "../data";
import { DatePicker } from "react-datepicker";

export const WorkExperience = ({ props }) => {
  return (
    <>
      {/* Employment */}
      <FieldArray name="workExperience">
        {({ insert, remove, push }) => {
          const { workExperience } = props.values;
          return (
            // <></>
            <div className="form-flex">
              <div className="">
                <div className="mt-10 sm:mt-0">
                  <div className="grid grid-cols-2 md:grid md:grid-cols-3 md:gap-6">
                    <div className="md:col-span-1">
                      <div className="px-4 sm:px-0">
                        <h3 className="text-lg font-medium leading-6 text-gray-900">
                          Work Experience
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          Use an email where you can receive mail.
                        </p>
                        <button
                          type="button"
                          className="my-2 bg-sky-700 rounded p-2 text-center text-slate-100  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300 ..."
                          onClick={() =>
                            push({
                              currentOrg: 0,
                              title: "",
                              startMonth: "",
                              startYear: 0,
                              endMonth: "",
                              endYear: 0,
                              organisation: "",
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
                      {workExperience.length >= 0 &&
                        workExperience.map((workExperience, index) => (
                          <div
                            className="my-5 shadow overflow-hidden sm:rounded-md"
                            key={index + 1}
                          >
                            <div className="px-4 py-2 bg-white   ">
                              <div className="sm:p-6 grid grid-cols-6 gap-6">
                                <div className="col-span-2 sm:col-span-2 ">
                                  <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Job Title
                                  </label>
                                  <Field
                                    type="text"
                                    placeholder="Job Title"
                                    name={`workExperience.${index}.title`}
                                    className="mt-1 py-2 block w-full px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                                  />
                                </div>
                                <div className="col-span-2 sm:col-span-2">
                                  <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Organisation
                                  </label>

                                  <Field
                                    className="mt-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                    type="text"
                                    placeholder="Organisation"
                                    name={`workExperience.${index}.organisation`}
                                  />
                                </div>
                                <div className="grid col-span-2 sm:col-span-2 justify-items-center">
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
                                <div className="col-span-3 gap-2 grid grid-cols-4">
                                  <label className="col-span-4 text-sm font-medium text-gray-700">
                                    Start Date
                                  </label>
                                  <Field
                                    className="col-span-2 my-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                    type="text"
                                    name={`workExperience.${index}.startMonth`}
                                    onChange={props.handleChange}
                                    as="select"
                                  >
                                    <option value="" key="1" label="Month" />
                                    {months.map((month) => (
                                      <option
                                        value={month.value}
                                        key={month.key}
                                        label={month.value}
                                      />
                                    ))}
                                  </Field>
                                  <Field
                                    className="col-span-2 my-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                    type="text"
                                    name={`workExperience.${index}.startYear`}
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
                                <div className="col-span-3 gap-2 grid grid-cols-4">
                                  {workExperience.currentOrg == "no" ? (
                                    <>
                                      <label
                                        htmlFor="last-name"
                                        className="col-span-4 text-sm font-medium text-gray-700"
                                      >
                                        End Date
                                      </label>
                                      <Field
                                        className="col-span-2 my-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                        type="text"
                                        name={`workExperience.${index}.endMonth`}
                                        onChange={props.handleChange}
                                        as="select"
                                      >
                                        <option
                                          value=""
                                          key="1"
                                          label="Month"
                                        />
                                        {months.map((month) => (
                                          <option
                                            value={month.value}
                                            key={month.key}
                                            label={month.value}
                                          />
                                        ))}
                                      </Field>
                                      <Field
                                        className="col-span-2 my-1 w-full py-2 px-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm text-gray-500"
                                        type="text"
                                        name={`workExperience.${index}.endYear`}
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
                                        <option
                                          value="Present"
                                          key="-1"
                                          label="Present"
                                        />
                                      </Field>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div className="col-span-6 gap-1 grid grid-cols-6">
                                  <div className="col-span-6">
                                    Are you currently working for this
                                    Organisation?
                                  </div>
                                  <div className="col-span-1 flex items-center mx-3 text-sm font-medium text-gray-700">
                                    <label>Yes</label>
                                    <Field
                                      type="radio"
                                      className="focus:ring-indigo-500 mx-2 py-1 h-4 w-4 text-indigo-600 border-gray-300"
                                      name={`workExperience.${index}.currentOrg`}
                                      value="yes"
                                      // checked={workExperience[index] === "yes"}
                                      onChange={props.handleChange}
                                      // onChange={props.handleChange = ()=>{workExperience.currentOrg = "yes"}}
                                    />
                                  </div>
                                  <div className="col-span-1 flex items-center mx-3 text-sm font-medium text-gray-700">
                                    <label>No</label>
                                    <Field
                                      type="radio"
                                      className="focus:ring-indigo-500 mx-2 py-1 h-4 w-4 text-indigo-600 border-gray-300 "
                                      name={`workExperience.${index}.currentOrg`}
                                      value="no"
                                      // onChange={props.handleChange = ()=>{workExperience.currentOrg = "no"}}
                                      onChange={props.handleChange}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
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
