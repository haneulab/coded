import dynamic from 'next/dynamic'
import type { IMobileMenu } from './MobileMenu.types'

import { TfiClose } from 'react-icons/tfi'

const Logo = dynamic(() => import('@nextapp/Logo'))
const Link = dynamic(() => import('next/link'))

const MobileMenu = (props: IMobileMenu) => {
    return (
        <aside className="w-full bg-white shadow-lg h-max text-bmain shadow-bmain/75">
            <section className="flex justify-between w-full px-8 py-3 mx-auto md:py-4 max-w-cutoff">
                <Logo />
                <button onClick={props.onHideMenu}>
                    <TfiClose className="text-xl" />
                </button>
            </section>
            <ul className="flex flex-col px-8 pt-6 mx-auto font-medium text-bmain gap-y-2 max-w-cutoff lg:text-lg">
                <Link
                    href="/"
                    className="transition-smooth lg:hover:opacity-100 opacity-70"
                >
                    Introduction
                </Link>
                <Link
                    href="/"
                    className="transition-smooth lg:hover:opacity-100 opacity-70"
                >
                    Products
                </Link>
                <ul className="flex flex-col pl-8 gap-y-2">
                    <Link
                        href="/"
                        className="transition-smooth lg:hover:opacity-100 opacity-70"
                    >
                        Coded / Invoicing Software
                    </Link>
                    <Link
                        href="/"
                        className="transition-smooth lg:hover:opacity-100 opacity-70"
                    >
                        Coded / Inventory Manager Software
                    </Link>
                </ul>
                <Link
                    href="/"
                    className="transition-smooth lg:hover:opacity-100 opacity-70"
                >
                    Use Cases
                </Link>
                <ul className="flex flex-col pl-8 gap-y-2">
                    <Link
                        href="/"
                        className="transition-smooth lg:hover:opacity-100 opacity-70"
                    >
                        Companies
                    </Link>
                    <Link
                        href="/"
                        className="transition-smooth lg:hover:opacity-100 opacity-70"
                    >
                        Restaurants & Cafe
                    </Link>
                    <Link
                        href="/"
                        className="transition-smooth lg:hover:opacity-100 opacity-70"
                    >
                        Freelancers
                    </Link>
                </ul>
            </ul>
            <div className="px-8 mx-auto mt-8 max-w-cutoff">
                <button className="px-8 py-2 border rounded-md border-gto font-nunito text-gto transition-smooth lg:hover:opacity-70">
                    Login
                </button>
            </div>
            <p className="p-8 py-12 text-center font-nunito">
                Happily Made Possible By{' '}
                <strong className="text-transparent bg-clip-text bg-gradient-to-r from-gfrom via-gvia to-gto">
                    Coded
                </strong>
            </p>
        </aside>
    )
}

export default MobileMenu
