import type { ILandingTag } from './LandingTag.types'

const LandingTag = (props: ILandingTag) => {
    return (
        <article className="flex flex-col justify-center text-center gap-y-3 lg:gap-y-4">
            <h2 className="text-3xl font-bold font-inter md:text-4xl lg:text-6xl xl:text-7xl">
                Too Much To Care.
            </h2>
            <p className="flex flex-col text-lg leading-6 text-light font-nunito md:text-xl lg:text-2xl lg:leading-9 text-bmain/60 gap-y-0.5">
                <span className="inline-block">
                    Let us automate your side hustles,
                </span>{' '}
                <span className="inline-block">
                    for the business to grow faster!
                </span>
            </p>
        </article>
    )
}

export default LandingTag
