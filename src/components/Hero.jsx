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
                    <span className='text-gradient'> Marine & Cargo</span><br />Survey
                </h1>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] text-gray-700 mt-5`}>
                Our company is managed by professional team & technical experts who'd have knowledge, skill and are
                certified.
            </p>
        </div>

        <div className={`flex-1 flex relative`}>
            <img alt='logo' src={logo} className='w-[100%] h-[100%] relative z-[5]' />
        </div>

    </section>

)


export default Hero                 