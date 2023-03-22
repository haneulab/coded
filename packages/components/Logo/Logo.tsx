import type { ILogo } from './Logo.types'

const Logo = (props: ILogo) => {
    return (
        <>
            <span className="w-[50px] h-[50px] relative trasnform block rotate-[-45deg]">
                <span className="block w-4 h-4 rounded-none rounded-t-full bg-gfrom" />
                <span className="block w-8 h-2 rounded-tr-full rounded-bl-full bg-gvia" />
                <span className="relative block w-4 h-4 rounded-none rounded-b-full bg-gto left-4" />
            </span>
        </>
    )
}

export default Logo
