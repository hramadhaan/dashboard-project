"use client";

import { FieldInputProps, FieldProps, FormikProps } from "formik";
import React from "react";

interface IInputComponent<V = any, FormValues = any> {
  label: string;
  field: FieldInputProps<V>;
  form: FormikProps<FormValues>;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
}

const InputComponent: React.FC<IInputComponent> = (props) => {
  return (
    <label className="form-control w-full  mt-2">
      <div className="label">
        <span className="label-text">{props.label}</span>
      </div>
      <input
        className="input input-bordered w-full"
        {...props.input}
        {...props.field}
      />
      {props.form.touched[props.field.name] &&
        props.form.errors[props.field.name] && (
          <div className="label">
            <span className="label-text-alt text-error">
              {props.form.errors[props.field.name] as string}
            </span>
          </div>
        )}
    </label>
  );
};

export default InputComponent;
