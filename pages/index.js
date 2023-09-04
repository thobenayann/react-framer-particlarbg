// icons
import { BiAtom } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/Io';
import { BsEyeFill } from 'react-icons/Bs';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ServiceCard from '../components/ServiceCard';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
    const cardContent = [
        {
            icon: <IoIosPeople size='1.5em' />,
            title: 'Humanisez',
            subtitle:
                'Votre communication pour recruter des talents qui partagent vos valeurs',
        },
        {
            icon: <BiAtom size='1.5em' />,
            title: 'Dynamisez',
            subtitle:
                'vos supports de formation avec des formats courts qui maintiennent l’attention et facilitent la mémorisation',
        },
        {
            icon: <BsEyeFill size='1.5em' />,
            title: 'Visibilitez',
            subtitle:
                'partagez vos événements, Améliorez l’expérience utilisateur…',
        },
    ];

    return (
        <div className='h-full w-full'>
            {/* text */}
            <div className='h-full w-full xl:h-auto xl:w-1/2 xl:pl-20 xl:pt-16'>
                <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                    {/* title */}
                    <motion.h1
                        variants={fadeIn('down', 0.2)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='h1'
                    >
                        Des{' '}
                        <span className='underline decoration-blue-500 decoration-2 underline-offset-4'>
                            vidéos professionnelles
                        </span>{' '}
                        pour vendre, former et communiquer
                    </motion.h1>
                    {/* subtitle */}
                    <motion.p
                        variants={fadeIn('down', 0.3)}
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-white'
                    >
                        J’accompagne les entreprises et les industriels à toutes
                        les étapes de leurs projets de vidéos, de montage et
                        d’animation 3D. Mettez en valeur votre activité, vos
                        produits et services dans une vidéo qui vous ressemble.
                    </motion.p>
                </div>
            </div>
            <div className='flex w-full justify-center gap-x-10 px-96'>
                {cardContent.map((card, index) => (
                    <ServiceCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
            </div>

            {/* image */}
            <div className='w-full h-full absolute right-0 bottom-0'>
                {/* bg img */}
                <div className='bg-none xl:bg-mro xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute -z-10'></div>
                {/* particles */}
                <ParticlesContainer />
            </div>
        </div>
    );
};

export default Home;
