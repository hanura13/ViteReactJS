import { quotes } from "../assets"

const ChooseCard = ({ content, title }) => (
    <div className='flex justify-between flex-col px-10 py-12 rounded-[12px] max-w-[280px] md:mr-10 sm:mr-5 mr-0 my-5 feature-card cursor-pointer'>
        <img alt="double_quotes" src={quotes} className="w-[42px] h-[27px] object-contain" />
        <p className="font-poppins font-normal text-[18px] leading-[32px] my-5">{title}</p>
        <p>{content}</p>
    </div>
)
export default ChooseCard