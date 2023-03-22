import dynamic from 'next/dynamic'
import type { StaticImageData } from 'next/image'
import type { ILandingCards } from './LandingCards.types'
import TargetCorporateImage from 'public/target_corporate_background.png'
import TargetRestaurantImage from 'public/target_restaurant_background.png'
import TargetFreelancerImage from 'public/target_freelancer_background.png'

const TargetCustomerCard = dynamic(() => import('@nextapp/TargetCustomerCard'))

interface TargetCustomer {
    img: StaticImageData
    title: string
    slug: string
    href: string
}

const LandingCards = (props: ILandingCards) => {
    const targetCustomers: TargetCustomer[] = [
        {
            title: 'Corporate',
            slug: 'Strieves For More Efficiency',
            href: '/clients/corporate',
            img: TargetCorporateImage,
        },
        {
            title: 'Business',
            slug: 'Makes Better Investment',
            href: '/clients/business',
            img: TargetRestaurantImage,
        },
        {
            title: 'Freelancer',
            slug: 'Improves Service Quality',
            href: '/clients/freelancer',
            img: TargetFreelancerImage,
        },
    ]

    return (
        <article className="flex flex-col items-center gap-y-16 lg:gap-y-24">
            <h3 className="text-3xl font-medium font-inter md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Who & When{' '}
                <strong className="font-bold">&apos;Coded&apos;</strong>
            </h3>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16">
                {targetCustomers.map((client, idx) => (
                    <TargetCustomerCard {...client} key={idx} />
                ))}
            </ul>
        </article>
    )
}

export default LandingCards
