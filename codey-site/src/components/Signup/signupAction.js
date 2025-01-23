import { z } from 'zod';

// Define the Sign Up schema
export const signupSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(50, "Full name must be less than 50 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters"),
});

// Validate function for Sign Up
export const validateSignup = (formData) => {
  try {
    signupSchema.parse(formData);
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
