import { choose } from '../constants'
import styles from '../style'
import ChooseCard from './ChooseCard'

const Choose = () => (
    <section id='chooseus' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h1 className={styles.heading2}>Why Choose Us</h1>

            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>There are many reasons to choose our marine cargo survey company for your surveying needs. Here are
                    just a few:</p>
            </div>
        </div>

        <div id='chooseCard' className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {choose.map((card, index) => (
                <ChooseCard key={card.id} {...card} index={index} />
            ))}
        </div>
    </section>
)


export default Choose