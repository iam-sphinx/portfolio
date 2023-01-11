import React from 'react'

import Html from '../assets/Html.png';
import Css from '../assets/Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import NodeJS from '../assets/NodeJS.png';
import MongoDB from '../assets/MongoDB.png';
import ReactImg from '../assets/ReactImg.png';
import Tailwind from '../assets/Tailwind.png';
import Javascript from '../assets/Javascript.png';

export default function Experience() {
    const expirences = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: Javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: ReactImg,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            src: Bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-700'
        },
        {
            id: 7,
            src: NodeJS,
            title: 'NodeJS',
            style: 'shadow-green-400'
        },
        {
            id: 8,
            src: MongoDB,
            title: 'MongoDB',
            style: 'shadow-teal-900'
        }

    ]




    return (
        <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className='w-full max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Expirence</p>
                    <p className='py-6'>These are the technologies i've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {
                        expirences.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2  rounded-lg ${style}`}>
                                <img src={src} alt="" className='w-20 mx-auto  object-contain h-20' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))}

                </div>
            </div>
        </div>
    )
}
