import { services } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const Services = () => (
    <section id='services' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Services</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Our marine cargo survey company was established with the goal of providing top-quality survey services
                to clients in the shipping industry. We are a team of experienced surveyors who have worked with a wide
                range of cargo types, from dry goods to hazardous materials. We are committed to ensuring the safety
                and integrity
            </p>
            <Button styles="mt-5" />
        </div>

        <div className={layout.sectionImg}>
            <img alt='services' src={services} className='w-[100%] h-[100%]' />
        </div>
    </section >
)

export default Services