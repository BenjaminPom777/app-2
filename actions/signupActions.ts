'use server'

import { saveUser } from "@/lib/db/user"
import { redirect } from "next/navigation"

import { z } from 'zod';

const signupSchema = z.object({
    userName: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
})

export const signupAction = (prevState: {}, formData: FormData) => {
    const errors = { userName: '', email: '', password: '' }

    const userName = formData.get('userName') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { success, data, error } = signupSchema.safeParse({ userName, email, password })

    if (!success) {
        return {
            errors: error.flatten().fieldErrors,
        }
    }

    saveUser({ user_name: userName, email, password })
        .then(() => {
            return { success: true }
        })
        .catch((e) => {
            console.error(e)
            return { success: false }
        })

    redirect('/login')

}