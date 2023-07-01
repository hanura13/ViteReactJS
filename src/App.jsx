import styles from './style'
import {
    Navbar, About, Choose, Footer,
    Hero, Mission, Services, Slider
} from './components'
import Stats from './components/Stats'

const App = () => {
    return (
        <div className='w-full overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
            </div>


            <div className={`${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Slider />
                    <Hero />
                </div>
            </div>

            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>

                    <About />
                    <Mission />
                    <Services />
                    <Choose />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App
