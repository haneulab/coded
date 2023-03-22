import type { ILandingSlugs } from './LandingSlugs.types'

const LandingSlugs = (props: ILandingSlugs) => {
    return (
        <>
            <ul className="flex flex-col gap-y-16 md:gap-y-24 lg:gap-y-32 lg:col-span-6 lg:px-16">
                <article className="flex flex-col itemms-start gap-y-2 lg:gap-y-3">
                    <h4 className="text-3xl font-bold font-inter md:text-4xl lg:text-5xl">
                        Precise Software Mechanism.
                    </h4>
                    <p className="text-base leading-7 lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
                        We do not need to worry about making computation
                        mistake, everything is precise and test-based computing.
                    </p>
                </article>
                <article className="flex flex-col itemms-start gap-y-2 lg:gap-y-3">
                    <h4 className="text-3xl font-bold font-inter md:text-4xl lg:text-5xl">
                        Ease To Use Interface.
                    </h4>
                    <p className="text-base leading-7 lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
                        Trust us. It is not coding! We do all the coding for you
                        to simply <strong>click</strong> and{' '}
                        <strong>type</strong>. That is <strong>ALL</strong>.
                    </p>
                </article>{' '}
                <article className="flex flex-col itemms-start gap-y-2 lg:gap-y-3">
                    <h4 className="text-3xl font-bold font-inter md:text-4xl lg:text-5xl">
                        Detailed Customizability.
                    </h4>
                    <p className="text-base leading-7 lg:text-lg lg:leading-8 xl:text-xl xl:leading-9">
                        We do not need to worry about making computation
                        mistake, everything is precise and test-based computing.
                    </p>
                </article>
            </ul>
        </>
    )
}

export default LandingSlugs
