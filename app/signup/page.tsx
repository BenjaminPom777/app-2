'use client'

import { useFormState } from 'react-dom'
import { signupAction } from '@/actions/signupActions';


const Signup = () => {

    const [formState, formAction] = useFormState(signupAction, {
        userName: '',
        email: '',
        password: ''
    })

    return (
        <div >
            <form action={formAction}>
                <div>
                    <label htmlFor="email">email</label>
                    <input className='rounded-sm' id='email' name='email' type='email'></input>
                </div>
                <div>
                    <label htmlFor="userName">User Name</label>
                    <input id='userName' name='userName' type='text'></input>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
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