"use server";
import { RegisterSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { error } from "console";
import { any, object, string } from "zod";

export const signUpCredentials = async(formData: FormData) => {

    const validateFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()))

    if(!validateFields.success){
        return {
            error: validateFields.error.flatten(string).fieldErrors
        }
    }
    const {name, email, password}= validateFields.data
    const hashedPassword = hashSync(password, 10)
    
    try {
        await prisma.user.create({
            data:{
                name,
                email,
                password: hashedPassword
            }
        })
    } catch (error) {
        return {message: "failed to regiter user"}
    }

    redirect("/login")
}