import type { StaticImageData } from 'next/image'

export interface ITargetCustomerCard {
    img: StaticImageData
    title: string
    slug: string
    href: string
}
