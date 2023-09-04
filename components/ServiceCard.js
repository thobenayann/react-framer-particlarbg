const ServiceCard = ({ icon, title, subtitle }) => {
    return (
        <div className='w-1/3 h-fit px-6 py-2 bg-white/30 rounded-3xl shadow-[#003178] shadow-2xl backdrop-filter backdrop-blur-xl backdrop-brightness-150 border'>
            <div className='w-full h-fit flex items-start justify-center md:justify-start'>
                <div className='flex items-center text-[#003178] mr-2'>
                    {icon}
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p className='text-[#003178] text-shadow-sm shadow-white font-medium'>
                        {subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
