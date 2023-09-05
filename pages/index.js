// icons
import { BiAtom } from 'react-icons/bi';
import { IoIosPeople } from 'react-icons/io';
import { BsEyeFill } from 'react-icons/bs';

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
            id: 1,
            icon: <IoIosPeople size='1.5em' />,
            title: 'Humanisez',
            subtitle:
                'Votre communication pour recruter des talents qui partagent vos valeurs',
        },
        {
            id: 2,
            icon: <BiAtom size='1.5em' />,
            title: 'Dynamisez',
            subtitle:
                'vos supports de formation avec des formats courts qui maintiennent l’attention et facilitent la mémorisation',
        },
        {
            id: 3,
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
                {cardContent.map((card) => (
                    <ServiceCard
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
            </div>

            {/* image */}
            <div className='w-full h-full absolute right-0 bottom-0'>
                {/* bg img */}
                {/* <div className='bg-mro bg-cover bg-center xl:bg-right bg-no-repeat w-full h-full absolute -z-10'></div> */}
                <video
                    autoPlay
                    loop
                    muted
                    className='absolute -z-10 w-auto min-w-full min-h-full max-w-none'
                >
                    <source
                        src='/videos/Annimation-3D_NEW.mp4'
                        type='video/mp4'
                    />
                </video>
                {/* particles */}
                <ParticlesContainer />
            </div>
        </div>
    );
};

export default Home;
