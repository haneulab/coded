import type { ILandingUIGraphic } from './LandingUIGraphic.types'

const LandingUIGraphic = (props: ILandingUIGraphic) => {
    return (
        <div className="flex flex-col justify-center px-3 pt-3 pb-6 transform border rounded-md shadow-md lg:hover:shadow-xl lg:hover:rounded-2xl h-max bg-slate-50 lg:col-span-6 gap-y-2 lg:gap-y-3 transition-smooth rotate-6 lg:hover:rotate-12 lg:hover:scale-110">
            <ul className="grid grid-cols-3 p-1.5 md:p-2 lg:p-4 text-white place-content-center gap-1 md:gap-2 lg:gap-4">
                <button className="px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-md bg-teal-400 text-xs sm:text-sm lg:text-base transition-smooth lg:hover:opacity-70">
                    InvocyU
                </button>
                <button className="px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-md bg-blue-400 text-xs sm:text-sm lg:text-base transition-smooth lg:hover:opacity-70">
                    InventoryM
                </button>
                <button className="px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-md bg-indigo-400 text-xs sm:text-sm lg:text-base transition-smooth lg:hover:opacity-70">
                    Manage App
                </button>
            </ul>
            <div className="p-4 border rounded-md bg-slate-800/90 text-wmain lg:py-6 w-[95%] mx-auto font-mono">
                <p className="text-xs font-light leading-6">
                    {' '}
                    <strong className="font-bold text-teal-400 font-inter">
                        Coded &rarr;
                    </strong>{' '}
                    How may I help you?
                </p>
                <p className="text-xs font-light leading-6">
                    {' '}
                    <strong className="font-bold text-gto font-inter">
                        Amanda &rarr;
                    </strong>{' '}
                    ...
                </p>
            </div>
            <div className="relative w-full">
                <ul className="relative z-10 px-2 -mt-1 text-sm md:px-3 lg:px-4 top-2">
                    <button className="px-3 py-1 mr-4 font-medium border lg:px-4 lg:py-2 rounded-t-md font-nunito bg-bmain/90 lg:hover:bg-slate-800/75 transition-smooth text-wmain">
                        History
                    </button>
                    <button className="px-3 py-1 font-medium translate-y-1.5 border relaitve lg:px-4 lg:py-2 rounded-t-md font-nunito bg-slate-100 lg:hover:bg-gvia/75 transition-smooth text-bmain/50 mr-1">
                        Files
                    </button>
                    <button className="px-3 py-1 font-medium translate-y-1.5 border relaitve lg:px-4 lg:py-2 rounded-t-md font-nunito bg-slate-100 lg:hover:bg-gvia/75 transition-smooth text-bmain/50">
                        Settings
                    </button>
                </ul>
                <div className="p-4 relative z-20 border rounded-md bg-wmain lg:py-6 w-[95%] mx-auto flex flex-col gap-y-4 md:gap-y-6">
                    <div>
                        <h5 className="mb-2 text-sm font-semibold font-inter sm:text-base">
                            Coded Service History
                        </h5>
                        <p className="pl-2 text-sm border-l-2 font-nunito">
                            Customer: <strong>Amanda Davidson</strong>
                        </p>
                        <p className="pl-2 text-sm border-l-2 font-nunito">
                            User Id: <strong>#AD544Cef</strong>
                        </p>
                    </div>
                    <div>
                        <h5 className="mb-2 text-sm font-semibold font-inter sm:text-base">
                            Active Services
                        </h5>
                        <p className="pl-2 text-sm border-l-2 font-nunito">
                            InvoicyU: <strong>In contract</strong>
                        </p>
                        <p className="pl-2 text-sm border-l-2 font-nunito">
                            InventoryM: <strong>In contract</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingUIGraphic
