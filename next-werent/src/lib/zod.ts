import { object, string } from "zod";

export const RegisterSchema = object({
    name: string().min(1, "name must be 1 character"),
    email: string().email("invalid Email"),
    password: string()
    .min(8,"password must be more than 8 character")
    .max(32,"password must be less than 32 character"),

    ConfirmPassword: string()
    .min(8,"password must be more than 8 character")
    .max(32,"password must be less than 32 character")

}).refine((data) => data.password === data.ConfirmPassword, {
    message: "password does not match",
    path: ["ConfirmPassword"]
})

