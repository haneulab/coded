import dynamic from 'next/dynamic'
import type { ITargetCustomerCard } from './TargetCustomerCard.types'
import { SlArrowRight } from 'react-icons/sl'

const Image = dynamic(() => import('next/image'))
const Link = dynamic(() => import('next/link'))

const TargetCustomerCard = (props: ITargetCustomerCard) => {
    return (
        <article className="overflow-hidden transform border rounded-lg shadow-lg shadow-bmain/5 border-bmain/10 transition-all duration-[0.45s] ease-in-out lg:hover:scale-95">
            <picture className="block w-full overflow-hidden">
                <Image src={props.img} alt={props.slug} />
            </picture>
            <section className="flex flex-col px-4 py-6 bg-white titems-center gap-y-6">
                <div className="flex flex-col text-center gap-y-1">
                    <h5 className="text-xl font-bold font-inter md:text-2xl lg:text-3xl">
                        {props.title}
                    </h5>
                    <p className="text-base font-medium lg:text-lg font-nunito text-bmain/60">
                        {props.slug}
                    </p>
                </div>
                <div className="flex justify-center">
                    <Link
                        href={props.href}
                        className="flex items-center transform gap-x-4 text-gto transition-smooth lg:hover:scale-110 lg:hover:text-blue-500"
                    >
                        <span>Learn More</span>
                        <SlArrowRight />
                    </Link>
                </div>
            </section>
        </article>
    )
}

export default TargetCustomerCard
