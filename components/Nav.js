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
        name: 'contact',
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
        <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen'>
            {/* inner */}
            <div className='flex w-full xl:flex-col items-center justify-between gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'>
                {navData.map((link, index) => {
                    return (
                        <Link
                            className={`${
                                link.path === pathname && 'text-accent'
                            } relative items-center group hover:text-accent transition-all duration-300`}
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
    );
};

export default Nav;
