import styles, { layout } from "../style"
import Button from './Button'
import { features } from '../constants'

const FeatureCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card cursor-pointer`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        </div>
        <div className="flex-1 flex flex-col ml-3">
            <h4>
                {title}
            </h4>
            <p>
                {content}
            </p>
        </div>
    </div>
)

const About = () => {
    return (
        <section id="about" className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>About Us</h2>
                <p className={`${styles.paragraph} max-w-[530px] mt-5`}>
                    Welcome to our marine cargo survey company PT. CAKRAWALA SAMUDERA SURVINDO.
                    Based at Jakarta - INDONESIA. PT. CAKRAWALA SAMUDERA SURVINDO is engaged in independent
                    Marine & Cargo survey as a service of inspection to conduct surveys in the field of maritime. our main
                    activities are Marine surveying, General Cargo, Petroleum and Cargo Inspection Services, Agro
                    Commodity and other specialized services.
                </p>
                <Button styles='mt-10' />
            </div>

            <div className={`${layout.sectionImg} flex-col`}>
                {features.map((feature, index) => (
                    <FeatureCard key={feature.id} {...feature} index={index} />
                ))}
            </div>
        </section>
    )
}

export default About