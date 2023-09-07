const ServiceCard = ({ icon, title, subtitle }) => {
    return (
        <div className='w-1/3 h-fit px-6 py-2 bg-[#00305B] rounded-lg shadow-[#007EA7] shadow-xl bg-opacity-90'>
            <div className='w-full h-fit flex items-start justify-center md:justify-start'>
                <div className='flex items-center text-[#007EA7] mr-2'>
                    {icon}
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-bold text-xl'>{title}</h2>
                    <p className='text-[#007EA7] font-medium'>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
