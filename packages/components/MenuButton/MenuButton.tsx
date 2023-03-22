import type { IMenuButton } from './MenuButton.types'

import { AiOutlineMenu } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const MobileMenu = dynamic(() => import('@nextapp/MobileMenu'))

const MenuButton = (props: IMenuButton) => {
    const router = useRouter()

    const [showMenu, setShowMenu] = useState<boolean>(false)

    function onShowMenu() {
        setShowMenu(true)
    }
    function onHideMenu() {
        setShowMenu(false)
    }

    return (
        <>
            <button
                role={'button'}
                onClick={onShowMenu}
                className="transition-smooth lg:hover:opacity-70"
            >
                <AiOutlineMenu className="text-4xl" />
            </button>
            {showMenu && (
                <aside className="fixed top-0 left-0 z-40 w-full h-screen bg-black/80 backdrop-blur-sm">
                    <MobileMenu onHideMenu={onHideMenu} />
                </aside>
            )}
        </>
    )
}

export default MenuButton
