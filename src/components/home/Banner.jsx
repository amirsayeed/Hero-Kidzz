import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-between'>
            <div className="flex-1 space-y-4">
                <h2 className={`${fontBangla.className} text-6xl font-bold leading-20`}>আপনার সন্তানকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ।</span></h2>
                <p className='text-xl font-medium'>Buy every toy with up to 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className="flex-1">
                <Image alt="banner-img" src={"/assets/hero.png"} height={400} width={500}/>
            </div>
        </div>
    );
};

export default Banner;