import { z } from "zod";

export const passengerSchema = z.object({
  uNumber: z
    .string()
    .min(1, "U-Number is required")
    .regex(
      /^U\d{4,}$/,
      "Must start with U followed by at least 4 digits (e.g. U1234567)",
    ),
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be 50 characters or less")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Only letters and spaces allowed"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be 50 characters or less")
    .regex(/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/, "Only letters and spaces allowed"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  phonePrefix: z.string().min(1, "Country code is required"),
  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\d{4,15}$/, "Enter 4–15 digits without the country code"),
});

export type PassengerFormData = z.infer<typeof passengerSchema>;
