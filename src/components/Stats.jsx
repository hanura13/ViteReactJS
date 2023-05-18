import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map(stat => (
            <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
                <h4 className="font-poppins font-semibold text-gradient xs:text-[34px] text-[24px] xs:leading-[53px] leading-[43px]">
                    {stat.title}
                </h4>
            </div>
        ))}
    </section>
)


export default Stats