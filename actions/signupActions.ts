'use server'

export const signupAction = (prevState: unknown, formData: FormData) => {
    const userName = formData.get('userName')
    const email = formData.get('email')
    const password = formData.get('password')

    // put user into database
    return {}
    
}