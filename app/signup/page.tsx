'use client'

import { useFormState } from 'react-dom'
import { signupAction } from '@/actions/signupActions';


const Signup = () => {
    // @ts-ignore
    const [formState, formAction] = useFormState(signupAction, {})
    

    return (
        <div >
            <form action={formAction}>
                <div>
                    <label htmlFor="email">email</label>
                    <input className='rounded-sm' id='email' name='email' type='email'></input>
                    {formState?.errors?.email && <div>{formState.errors?.email}</div>}
                </div>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input id='userName' name='userName' type='text'></input>
                    {formState?.errors?.userName && <div>{formState.errors?.userName}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    {formState?.errors?.password && <div>{formState.errors.password}</div>}
                    <input id='password' name='password' type='password'></input>
                </div>
                <div>
                    <input type="submit" value="submit"  />
                </div>
            </form>
        </div>
    )
}

export default Signup