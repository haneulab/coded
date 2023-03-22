import dynamic from 'next/dynamic'
import type { IFooter } from './Footer.types'

const Link = dynamic(() => import('next/link'))
const Logo = dynamic(() => import('@nextapp/Logo'))

const Footer = (props: IFooter) => {
    return (
        <footer className="w-full">
            <section className="grid w-full grid-cols-1 gap-4 px-8 py-16 mx-auto lg:py-20 max-w-cutoff lg:grid-cols-12 lg:gap-16">
                <div className="flex-col justify-start hidden lg:flex gap-y-6 lg:col-span-4">
                    <h2 className="flex items-end text-4xl font-bold">
                        <Logo />
                        <span>Coded</span>
                    </h2>
                    <p className="text-xl leading-8 font-inter text-slate-600/90">
                        <strong>Too much to care,</strong> Let us automate your
                        side hustles, for the business to grow faster!
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 lg:col-span-8 lg:gap-12">
                    <ul className="flex flex-col gap-y-12 lg:gap-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12">
                        <div>
                            <h3 className="flex items-center mb-6 text-lg font-bold lg:hidden font-inter md:text-xl lg:text-2xl gap-x-2">
                                <Logo /> <span>Coded</span>
                            </h3>
                            <h3 className="items-center hidden mb-6 font-bold hit-lg lg:block font-inter md:text-xl lg:text-2xl gap-x-2">
                                Coded
                            </h3>
                            <ul className="flex flex-col gap-y-4">
                                <Link
                                    href={'/'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Home
                                </Link>
                                <Link
                                    href={'/about'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    About
                                </Link>
                                <Link
                                    href={'/services'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Services
                                </Link>
                                <Link
                                    href={'/pricing'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Pricing
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-xl font-bold font-inter lg:text-2xl">
                                About Coded
                            </h3>
                            <ul className="flex flex-col gap-y-4">
                                <Link
                                    href={'/'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Our Starting
                                </Link>
                                <Link
                                    href={'/about'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    User Guidebook
                                </Link>
                            </ul>
                        </div>
                    </ul>
                    <ul className="flex flex-col gap-y-12 lg:gap-y-0 lg:grid lg:grid-cols-2 lg:gap-x-12">
                        <div>
                            <h3 className="mb-6 text-xl font-bold font-inter lg:text-2xl">
                                Use Cases
                            </h3>
                            <ul className="flex flex-col gap-y-4">
                                <Link
                                    href={'/client/corporate'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Corportate
                                </Link>
                                <Link
                                    href={'/client/business'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Business
                                </Link>
                                <Link
                                    href={'/client/freelancer'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Freelancing
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-6 text-xl font-bold font-inter lg:text-2xl">
                                Coded Company
                            </h3>
                            <ul className="flex flex-col gap-y-4">
                                <Link
                                    href={'/info'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Company Info
                                </Link>
                                <Link
                                    href={'/career'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Coded Career
                                </Link>
                                <Link
                                    href={'/notification'}
                                    className="font-medium font-inter text-slate-600/90"
                                >
                                    Notifications
                                </Link>
                            </ul>
                        </div>
                    </ul>
                </div>
            </section>
        </footer>
    )
}

export default Footer
