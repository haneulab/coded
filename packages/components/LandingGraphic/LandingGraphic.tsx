import dynamic from 'next/dynamic'
import type { ILandingGraphic } from './LandingGraphic.types'
import CodedBackground from 'public/coded_background.png'
import { TfiClose } from 'react-icons/tfi'

const Image = dynamic(() => import('next/image'))

const LandingGraphic = (props: ILandingGraphic) => {
    return (
        <>
            <article className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gfrom/10 rounded-full animate-pulse rotate-[-45deg]" />
            <article className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gvia/10 rounded-full animate-pulse rotate-[0deg]" />
            <article className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[550px] h-[450px] bg-gto/10 rounded-full animate-pulse rotate-[45deg]" />
            <article className="relative w-full mx-auto md:max-w-sm lg:max-w-2xl z-30 flex flex-col px-8 pt-12 pb-8 font-mono text-sm border-t border-x rounded-md border-bmain/25 shadow-md shadow-gvia-500/25 bg-bmain/90 lg:hover:bg-slate-800/90 backdrop-blur-md gap-y-3 text-wmain lg:hover:scale-[110%] transition-smooth lg:hover:shadow-2xl">
                <span className="absolute top-0 right-0 inline-flex items-center px-3 py-1.5 text-xs border rounded-md bg-slate-700/75 border-wmain/5 transition-smooth lg:hover:bg-slate-800 text-gvia gap-x-4">
                    <span>Coded Invoicy</span>
                    <button
                        type="button"
                        role={'button'}
                        className="font-medium text-red-400 transition-smooth lg:hover:sacle-105 lg:hover:text-red-500"
                    >
                        <TfiClose />
                    </button>
                </span>
                <p className="text-sm font-light leading-6">
                    {' '}
                    <strong className="font-bold text-gto font-inter">
                        Amanda &rarr;
                    </strong>{' '}
                    Write my invoice today...
                </p>
                <p className="text-sm font-light leading-6">
                    {' '}
                    <strong className="font-bold text-teal-400 font-inter">
                        Coded &rarr;
                    </strong>{' '}
                    Sure, give me one second...
                </p>
                <ul className="flex flex-col gap-y-1 lg:gap-y-2">
                    <p className="text-xs font-light leading-7 text-wmain/50">
                        |&rarr; Connecting to the POS system...
                    </p>
                    <p className="hidden text-xs font-light leading-7 text-wmain/50 lg:block">
                        |&rarr; Successfully retrieved the data...
                    </p>
                    <p className="text-xs font-light leading-7 text-wmain/50">
                        |&rarr; Outputing the result file...
                    </p>
                </ul>
                <p className="text-sm font-light leading-6">
                    {' '}
                    <strong className="font-bold text-teal-400 font-inter">
                        Coded &rarr;
                    </strong>{' '}
                    Amanda. I&apos;ve outputed your invoice for today 4/25/2023.
                </p>
                <ul className="flex flex-col pt-2 gap-y-4 md:flex-row md:gap-y-0 md:gap-x-4">
                    <button
                        disabled={true}
                        role={'presentation'}
                        className="px-4 py-2 border rounded-md border-gvia text-gvia font-inter transition-smooth lg:hover:bg-gvia lg:hover:text-bmain w-full md:w-[175px]"
                    >
                        View invoice.pdf
                    </button>
                    <button
                        disabled={true}
                        role={'presentation'}
                        className="px-4 py-2 border rounded-md border-gvia text-gvia font-inter transition-smooth lg:hover:bg-gvia lg:hover:text-bmain w-full md:w-[175px]"
                    >
                        Save & Exit
                    </button>
                </ul>
            </article>
            <article className="relative z-20 flex flex-col w-[400px] sm:w-full sm:mx-auto h-[400px] justify-end px-8 pt-16 pb-[105px] md:pb-[67.5px] mx-0 text-center bg-white border rounded-full -top-[125px] -mt-[62.5px] md:-top-[150px] md:-mt-[75px] sm:max-w-[75%]">
                <h3 className="text-2xl font-semibold font-inter lg:text-3xl mb-0.5 lg:mb-1">
                    As Simple As <strong>JUST</strong>
                </h3>
                <p className="text-lg font-light font-nunito text-bmain/50 lg:text-xl">
                    Typing necessary words in.
                </p>
            </article>
        </>
    )
}

export default LandingGraphic
