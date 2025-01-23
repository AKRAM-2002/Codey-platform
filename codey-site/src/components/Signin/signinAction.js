
import { z } from 'zod';

// Define the Sign In schema
export const signinSchema = z.object({
  emailOrUsername: z
    .string()
    .min(1, "Email or username is required")
    .max(50, "Email or username must be less than 50 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
});

// Validate function for Sign In
export const validateSignin = (formData) => {
  try {
    signinSchema.parse(formData);
    return { success: true, errors: null };
  } catch (error) {
    return {
      success: false,
      errors: error.errors.map((err) => ({
        path: err.path[0],
        message: err.message,
      })),
    };
  }
};
