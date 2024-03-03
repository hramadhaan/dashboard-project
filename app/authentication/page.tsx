"use client";

import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { isEmpty } from "lodash";
import { signIn } from "@/app/lib/auth";
import { authenticated } from "../actions/authentication";

interface AuthenticationPageProps {
  callbackUrl: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(5, "Password too short").required("Required"),
});

const AuthenticationPage: React.FC<AuthenticationPageProps> = (props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  return (
    <main className="w-full flex h-screen items-center justify-center bg-neutral-content">
      <div className="p-6 bg-white rounded-lg md:w-4/12 w-10/12 shadow-lg">
        <div className="flex flex-col items-center">
          <p className="text-xl font-semibold">Login to Account</p>
          <span className="text-sm font-base mt-1">
            Please enter your email and password to continue
          </span>
          <div className="mt-6 w-full">
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignInSchema}
              onSubmit={async (values: ILoginForm) => {
                const formData = new FormData();
                formData.append("email", values.email);
                formData.append("password", values.password);
                await authenticated(formData);
              }}
            >
              {({ errors, touched, isSubmitting, isValid }) => {
                return (
                  <Form method="post">
                    <div className="flex flex-col">
                      <label className="form-control w-full">
                        <div className="label">
                          <span className="label-text">Email</span>
                        </div>
                        <Field
                          className="input input-bordered w-full"
                          placeholder="Email"
                          type="email"
                          name="email"
                        />
                        {errors.email && touched.email && (
                          <div className="label">
                            <span className="label-text-alt text-error">
                              {errors.email}
                            </span>
                          </div>
                        )}
                      </label>
                      <label className="form-control w-full mt-2">
                        <div className="label">
                          <span className="label-text">Password</span>
                        </div>
                        <Field
                          className="input input-bordered w-full"
                          placeholder="Password"
                          type="password"
                          name="password"
                        />
                        {errors.password && touched.password && (
                          <div className="label">
                            <span className="label-text-alt text-error">
                              {errors.password}
                            </span>
                          </div>
                        )}
                      </label>
                      {!isEmpty(errorMessage) && (
                        <p className="text-sm text-error mt-2">
                          {errorMessage}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={!isValid || isLoading}
                        className={`btn ${
                          !isValid || isLoading ? "btn-disabled" : "btn-primary"
                        } w-full mt-6`}
                      >
                        Login
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AuthenticationPage;
