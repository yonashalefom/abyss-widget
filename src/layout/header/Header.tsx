import AbyssLogo from "@/components/logo/Logo";
import Link from "next/link";
import {Icon} from '@iconify/react';
import SearchBar from "@/components/ui/SearchBar";
import LogoRight from "@/components/logo/LogoRight";

const Header: React.FC = () => {
    return (
        <header>
            <nav className="flex h-24 items-center justify-between px-8">
                <div className="flex items-center mr-4 z-9 ">
                    <Link href="/">
                        <AbyssLogo/>
                    </Link>
                </div>

                <div className='xl:absolute w-full xl:-ml-8.5'>
                    <div className=" hidden md:flex container mx-auto  lg:max-w-[760px] gap-x-4">
                        {/* Search Bar */}
                        <SearchBar/>

                        {/* Navigation Links */}
                        <Link
                            className="hidden lg:block group text-gray-400 font-bold border hover:text-white dark:hover:text-white border-card-hover border-solid bg-card-bg py-2 px-4 hover:bg-accent focus:ring-4 focus:ring-blue-300 rounded-full text-base dark:bg-card-bg dark:hover:bg-abyssaccent hover:bg-abyssaccent dark:border-card-hover focus:outline-none dark:focus:ring-blue-800"
                            href="/widgets">
                            <div className="flex justify-center items-center ">
                                <span>Widgets</span>
                                {' '}
                                <Icon icon="lucide:stars"
                                      className="ml-2 size-4 text-yellow-400 group-hover:text-white dark:group-hover:text-white"/>
                            </div>
                        </Link>
                        <Link
                            className="hidden lg:block group text-gray-400 font-bold border hover:text-white dark:hover:text-white border-card-hover border-solid bg-card-bg py-2 px-4 hover:bg-accent focus:ring-4 focus:ring-blue-300 rounded-full text-base dark:bg-card-bg dark:hover:bg-abyssaccent hover:bg-abyssaccent dark:border-card-hover focus:outline-none dark:focus:ring-blue-800"
                            href="#">
                            <div className="flex justify-center items-center">
                                <span>Requests</span>
                                {' '}
                                <Icon icon="fa6-solid:bell-concierge" className="ml-2 size-4"/>
                            </div>
                        </Link>
                    </div>

                </div>

                <div className="flex items-center justify-center z-9 gap-3">
                    <Link
                        className="group text-gray-400 font-bold dark:hover:text-white hover:text-white  py-2 px-4 hover:bg-accent focus:ring-4 focus:ring-blue-300 rounded-full text-base  dark:hover:bg-abyssaccent hover:bg-abyssaccent focus:outline-none dark:focus:ring-blue-800"
                        href="/widgets">
                        <div className="flex justify-center items-center">
                            <Icon icon="tabler:circle-plus" className="size-6"/>
                            {' '}
                            <span className="ml-2 font-bold">Create</span>
                        </div>
                    </Link>
                    <Link
                        className="group mr-4 text-gray-400 font-bold dark:hover:text-white hover:text-white py-2 px-2 hover:bg-accent focus:ring-4 focus:ring-blue-300 rounded-full text-base  dark:hover:bg-abyssaccent hover:bg-abyssaccent focus:outline-none dark:focus:ring-blue-800"
                        href="/widgets">
                        <div className="flex justify-center items-center">
                            <Icon icon="tabler:bell-filled" className="size-6"/>
                        </div>
                    </Link>
                    <LogoRight/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
