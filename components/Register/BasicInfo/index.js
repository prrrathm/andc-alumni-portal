import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import { yearList, courses } from "../data";

export const BasicInfo = ({ props }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="mt-10 sm:mt-0">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use an email where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-8  gap-4 ">
                <div className="col-span-4 sm:col-span-4">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={props.values.firstName}
                    onChange={props.handleChange}
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-4 sm:col-span-4">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={props.values.lastName}
                    onChange={props.handleChange}
                    autoComplete="family-name"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label
                    htmlFor="course"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Course
                  </label>
                  <Field
                    type="text"
                    name="course"
                    value={props.values.course}
                    onChange={props.handleChange}
                    as="select"
                    className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    {courses.map((course) => (
                      <option
                        value={course.value}
                        key={course.key}
                        label={course.key}
                      />
                    ))}
                  </Field>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="yearOfGraduation"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Year of Graduation
                  </label>
                  <Field
                    label="Year Of Graduation"
                    type="text"
                    name="yearOfGraduation"
                    value={props.values.yearOfGraduation}
                    onChange={props.handleChange}
                    as="select"
                    className="mt-1  w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                  >
                    {yearList.map((year) => (
                      <option value={year} key={year} label={year} />
                    ))}
                  </Field>
                </div>
                <div className="col-span-8 sm:col-span-6">
                  <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter Email and Password 
                  </label>
                  <Field
                    className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={props.handleChange}
                    value={props.values.email}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  {/* <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label> */}
                  <Field
                    className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    type="password"
                    name="password"
                    placeholder="Create Password"
                    onChange={props.handleChange}
                    value={props.values.password}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  {/* <label
                    htmlFor="email-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label> */}
                  <Field
                    className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    onChange={props.handleChange}
                    value={props.values.confirmPassword}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* <div>
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
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
          value={props.values.email}
        />
        <br />
        <label htmlFor="yearOfGraduation">Year of Graduation</label>
        <Field
          className="form-control"
          type="text"
          name="course"
          label="Course"
          value={props.values.course}
          onChange={props.handleChange}
          as="select"
        >
          {courses.map((course) => (
            <option value={course.value} key={course.key} label={course.key} />
          ))}
        </Field>
        <label htmlFor="yearOfGraduation">Year of Graduation</label>
        <Field
          className="form-control"
          label="Year Of Graduation"
          type="text"
          name="yearOfGraduation"
          value={props.values.yearOfGraduation}
          onChange={props.handleChange}
          as="select"
        >
          {yearList.map((year) => (
            <option value={year} key={year} label={year} />
          ))}
        </Field>
      </div> */
}
