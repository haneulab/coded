import type { NextPageWithLayout } from '@nextapp/app'
import dynamic from 'next/dynamic'
import { SlArrowRightCircle } from 'react-icons/sl'

const Layout = dynamic(() => import('@nextapp/Layout'))
const Meta = dynamic(() => import('@nextapp/Meta'))

const LandingTag = dynamic(() => import('@nextapp/LandingTag'))
const LandingGraphic = dynamic(() => import('@nextapp/LandingGraphic'))
const LandingSlugs = dynamic(() => import('@nextapp/LandingSlugs'))
const LandingUIGraphic = dynamic(() => import('@nextapp/LandingUIGraphic'))
const LandingCards = dynamic(() => import('@nextapp/LandingCards'))

const HomePage: NextPageWithLayout = () => {
    return (
        <>
            <Meta />
            <div className="relative flex flex-col w-full min-h-screen overflow-hidden bg-gradient-to-b from-wmain via-gfrom/10 to-white">
                <section className="relative flex flex-col w-full px-8 pt-32 pb-16 mx-auto lg:pt-36 max-w-cutoff">
                    <LandingTag />
                    <br />
                    <br />
                    <br />
                    <LandingGraphic />
                    <br />
                    <br />
                    <div className="z-30 flex flex-col-reverse gap-16 px-4 lg:px-0 lg:grid lg:grid-cols-12">
                        <LandingSlugs />
                        <LandingUIGraphic />
                    </div>
                </section>
            </div>
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden bg-gradient-to-b from-white via-white to-white">
                <section className="relative flex flex-col w-full px-8 pt-16 pb-32 mx-auto lg:pt-24 lg:pb-36 max-w-cutoff gap-y-24 lg:gap-y-32">
                    <LandingCards />
                    <article className="flex flex-col text-center gap-y-10 lg:gap-y-12 xl:gap-y-16">
                        <div className="flex flex-col px-2 gap-y-4 md:gap-y-5 lg:gap-y-6 xl:gap-y-8">
                            <h3 className="text-3xl font-bold md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-inter">
                                The End of Inefficient Workflow
                            </h3>
                            <p className="text-lg font-medium lg:text-xl 2xl:text-2xl font-inter text-bmain/75">
                                It all starts with your first experience of{' '}
                                <strong>Coded</strong>
                            </p>
                        </div>
                        <div>
                            <button className="flex items-center justify-center w-full px-8 py-3 mx-auto text-lg font-medium text-center text-white border-2 border-transparent rounded-lg sm:max-w-xs gap-x-4 lg:px-10 lg:py-4 bg-gto lg:text-xl font-inter transition-smooth lg:hover:bg-transparent lg:hover:border-gto lg:hover:text-gto">
                                <span>Get Started</span>
                                <SlArrowRightCircle className="text-xl lg:text-2xl" />
                            </button>
                        </div>
                    </article>
                </section>
            </div>
        </>
    )
}

HomePage.getLayout = (page) => {
    return <Layout>{page}</Layout>
}

export default HomePage
