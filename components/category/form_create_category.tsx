"use client";

import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import isEmpty from "lodash/isEmpty";
// Components;
import InputComponent from "../input";
import TextAreaComponent from "../TextAreaComponent";
export interface CategoryValues {
  name: string;
  description: string;
}

interface IFormCreateCategory {
  onSubmit: (values: CategoryValues) => void;
  data?: CategoryValues;
}

const CategorySchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
});
const FormCreateCategory: React.FC<IFormCreateCategory> = (props) => {
  return (
    <Formik
      initialValues={{
        name: props.data?.name ?? "",
        description: props.data?.description ?? "",
      }}
      onSubmit={(values: CategoryValues) => {
        props.onSubmit(values);
      }}
      validationSchema={CategorySchema}
    >
      {({ isSubmitting, isValid }) => {
        return (
          <Form method="post">
            <div>
              <Field
                name="name"
                input={{
                  type: "text",
                  placeholder: "Name",
                }}
                component={InputComponent}
                label="Name"
              />
              <Field
                name="description"
                input={{
                  placeholder: "Description",
                }}
                component={TextAreaComponent}
                label="Description"
              />
              <button
                type="submit"
                disabled={!isValid}
                className="btn btn-primary w-full mt-6"
              >
                {!isEmpty(props.data) ? "Edit" : "Submit"}
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormCreateCategory;
