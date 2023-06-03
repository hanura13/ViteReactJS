import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[62px] text-[42px] ss:leading-[100px] leading-[75px] text-gray-800'>
                    Independent <br className='sm:block hidden' /> {' '}
                    <span className='text-gradient'> Marine & Cargo</span> {' '}
                </h1>

                <div className='ss:flex hidden md:mr-4 mr-0'>
                    <GetStarted />
                </div>
            </div>
            <h1 className='font-poppins font-semibold ss:text-[58px] text-[42px] ss:leading-[100px] leading-[75px] text-gray-800'>
                Survey
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-700`}>
                Our company is managed by professional team & technical experts who'd have knowledge, skill and are
                certified.
            </p>

            <img src={logo} alt="css" className="w-[120px] h-[120px]" />
            <div className={`ss:hidden ${styles.flexCenter} mt-5`}>
                <GetStarted />
            </div>
        </div>
    </section>

)


export default Hero                 