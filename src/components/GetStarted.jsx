import styles from "../style"

const GetStarted = () => (
    <div className={`${styles.flexCenter} w-[140px] h-[70px] rounded-[40px] bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${styles.flexCenter} flex-col bg-white  w-[100%] h-[100%] rounded-[40px] cursor-pointer`}>
            <div className={`${styles.flexStart} flex-row`}>
                <p className="font-poppins font-medium text-[18px] leading-[23px]">
                    <span className="text-gradient">Get Started</span>
                </p>
            </div>
        </div>
    </div>
)


export default GetStarted