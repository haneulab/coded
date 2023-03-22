import dynamic from 'next/dynamic'
import type { IHeader } from './Header.types'

const LogoLink = dynamic(() => import('@nextapp/LogoLink'))
const LoginButton = dynamic(() => import('@nextapp/LoginButton'))
const MenuButton = dynamic(() => import('@nextapp/MenuButton'))

const Header = (props: IHeader) => {
    return (
        <header className="fixed top-0 z-40 w-full bg-wmain/90 backdrop-blur-sm text-bmain">
            <section className="flex items-center justify-between w-full px-8 py-3 mx-auto md:py-4 max-w-cutoff">
                <LogoLink />
                <nav className="flex items-center gap-x-4">
                    <LoginButton />
                    <MenuButton />
                </nav>
            </section>
        </header>
    )
}

export default Header
