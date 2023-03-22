import dynamic from 'next/dynamic'
import type { ILogoLink } from './LogoLink.types'

const Link = dynamic(() => import('next/link'))
const Logo = dynamic(() => import('@nextapp/Logo'))

const LogoLink = (props: ILogoLink) => {
    return (
        <h1>
            <Link
                href={'/'}
                className="flex items-center text-xl font-medium lg:text-2xl font-inter"
            >
                <Logo />
                <span>Coded</span>
            </Link>
        </h1>
    )
}

export default LogoLink
