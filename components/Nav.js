// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2';

// nav data
export const navData = [
    { name: 'Accueil', path: '/', icon: <HiHome /> },
    {
        name: 'Témoignages',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    { name: 'Services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'Réalisations', path: '/work', icon: <HiViewColumns /> },
    { name: 'Mon histoire', path: '/about', icon: <HiUser /> },
    {
        name: 'Contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
];

// Next link
import Link from 'next/link';
// router
import { useRouter } from 'next/router';

const Nav = () => {
    const router = useRouter();
    const pathname = router.pathname;
    return (
        <>
            {/* Desktop NAV */}
            <nav className='fixed z-50 right-0 bg-white/10 w-full'>
                <div className='hidden xl:flex w-full items-center justify-end gap-x-10 px-4 h-max py-4 bg-transparent backdrop-blur-sm text-xl'>
                    {navData.map((link, index) => {
                        return (
                            <Link
                                className={`relative items-center group hover:text-blue-500 transition-all duration-300 ${
                                    link.path === pathname
                                        ? link.name === 'Accueil'
                                            ? 'text-blue-500'
                                            : 'underline decoration-blue-500 underline-offset-2'
                                        : ''
                                }`}
                                href={link.path}
                                key={index}
                            >
                                {/* Links */}
                                {link.name === 'Accueil' ? (
                                    <div>{link.icon}</div>
                                ) : (
                                    <span>{link.name}</span>
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Table and mobile NAV */}
            <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:hidden'>
                {/* inner */}
                <div className='flex w-full xl:flex-col items-center justify-between gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                    {navData.map((link, index) => {
                        return (
                            <Link
                                className={`${
                                    link.path === pathname && 'text-blue-500'
                                } relative items-center group hover:text-blue-500 transition-all duration-300`}
                                href={link.path}
                                key={index}
                            >
                                {/* tooltip */}
                                <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
                                    <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
                                        <span className='text-[12px] leading-none font-semibold capitalize'>
                                            {link.name}
                                        </span>
                                        {/* triangle */}
                                        <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2'></div>
                                    </div>
                                </div>
                                {/* icon */}
                                <div>{link.icon}</div>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Nav;
