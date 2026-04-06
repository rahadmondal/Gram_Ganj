import AuthLeft from '@/components/auth/AuthLeft'
import AuthRight from '@/components/auth/AuthRight'
import LoginForm from '@/components/auth/LoginForm'
import { LOGIN_CONFIG } from '@/lib/authPageConfig'
import React from 'react'

const SigninPage = () => {
    return (
        <div className="flex min-h-screen w-full">
            <AuthLeft {...LOGIN_CONFIG} />
            <AuthRight>
                <LoginForm />
            </AuthRight>
        </div>
    )
}

export default SigninPage