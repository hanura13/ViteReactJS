import { mission } from '../assets'
import style, { layout } from '../style'

const Mission = () => (
    <section id='mission' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img alt='mission' src={mission} className='w-[100%] h-[100%] relative z-[5]' />
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={style.heading2}>Our Mission</h2>
            <p className={`${style.paragraph} max-w-[470px] mt-5`}>To provide accured and reliable professional services in maritime commerce, cargo operator and shipping
                industries beside that we are committed to combine an objective and professional behavior in accordance
                with the governing technical rules and standards, with the understanding of the commercial implications
                of our work and in protection of our Client’s interests.</p>
        </div>
    </section>
)

export default Mission