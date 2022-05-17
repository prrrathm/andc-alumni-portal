import React from "react";
import { Formik, Form, Field } from "formik";

export const ContactInfo = ({ props }) => {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Contact Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use an email where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-2  gap-6 ">
                  <div className="col-span-2 md:col-span-1 grid grid-cols-4">
                    <label
                      htmlFor="first-name gap-1"
                      className="font-black text-gray-700 col-span-1 flex items-center justify-center text-2xl"
                    >
                      @
                    </label>
                    <Field
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm col-span-3"
                      type="text"
                      name="twitterHandle"
                      placeholder="Twitter Username"
                      value={props.values.twitterHandle}
                      onChange={props.handleChange}
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1 grid grid-cols-4">
                    <label
                      htmlFor="last-name"
                      className="font-black text-gray-700 col-span-1 flex items-center justify-center text-2xl"
                    >
                      @
                    </label>
                    <Field
                      type="text"
                      name="linkedinHandle"
                      placeholder="Linkedin Username"
                      value={props.values.linkedinHandle}
                      onChange={props.handleChange}
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-sky-500 focus:border-sky-500 sm:text-sm col-span-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};
