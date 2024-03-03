"use server";

import { signIn } from "../lib/auth";

export const authenticated = (formData: FormData) => {
  signIn('credentials', formData)
};
