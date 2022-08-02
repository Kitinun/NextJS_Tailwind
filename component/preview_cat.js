import Image from 'next/image';
import cat1 from '../public/images/cat1.gif'
import cat2 from '../public/images/cat2.gif'
import cat3 from '../public/images/cat3.gif'

export default function preview_cat() {
    return (
        <div>
            <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
                <Image
                    objectFit='cover'
                    src={cat1}
                    alt='Picture of Cat1'
                    layout='fill'
                    priority
                />
            </div>

            <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
                <Image
                    objectFit='cover'
                    src={cat2}
                    alt='Picture of Cat1'
                    layout='fill'
                    priority
                />
            </div>

            <div className='relative w-32 h-32 m-4 overflow-hidden rounded-full ring-2 ring-pink-300 ring-offset-4'>
                <Image
                    objectFit='cover'
                    src={cat3}
                    alt='Picture of Cat1'
                    layout='fill'
                    priority
                />
            </div>
        </div>
    )
}
