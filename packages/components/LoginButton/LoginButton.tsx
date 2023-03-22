import type { ILoginButton } from './LoginButton.types'

import dynamic from 'next/dynamic'

const LoginButton = (props: ILoginButton) => {
    return (
        <button
            type="button"
            aria-label="loginbutton"
            className="px-4 py-2 font-medium rounded-md bg-gvia text-bmain font-nunito"
        >
            Login
        </button>
    )
}

export default LoginButton
