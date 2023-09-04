// next image
import Image from 'next/image';

// components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

// framer motion
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../variants';

const Home = () => {
    return (
        <div className='h-full w-full'>
            {/* text */}
            <div className='h-full w-full xl:h-auto xl:w-1/2 xl:p-20'>
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
            {/* image */}
            <div className='w-full h-full absolute right-0 bottom-0'>
                {/* bg img */}
                <div className='bg-none xl:bg-mro xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-overlay'></div>
                {/* particles */}
                <ParticlesContainer />
            </div>
        </div>
    );
};

export default Home;
