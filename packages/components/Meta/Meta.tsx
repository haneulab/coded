import dynamic from 'next/dynamic'
import type { IMeta } from './Meta.types'

const Head = dynamic(() => import('next/head'))

const Meta = ({
    title = 'Coded | Automate Your Side Hustles For Your Business To Grow',
    description = 'Coded is a softwar agency that provides services to automate the side burdens for your businesses. We work with corportates, business owners, and freelancers.',
    keywords = [
        'Coded',
        'Software Service',
        'Automate',
        'Business Grow',
        'Efficient Workflow',
    ],
    image = '/coded_background.png',
}: IMeta) => {
    return (
        <Head>
            <link rel="shortcut icon" href="/favicon.ico" />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:site" content="@haneulab" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <meta name="keywords" content={keywords.join(', ')} />
            <meta property="og:description" content={description} />
            <meta property="og:title" content={title} />
            <meta property="og:image" content={image} />
            <meta name="description" content={description} />
            <title>{title}</title>
        </Head>
    )
}

export default Meta
