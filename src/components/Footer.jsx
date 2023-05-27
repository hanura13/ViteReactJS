import styles, { layout } from '../style'
import { contact } from '../constants'

const Footer = () => (
    <section>
        <div className={`${layout.section} border-t-2`}>
            <div>

                <h4 className="font-poppins font-semibold text-gray-700">Contact Us</h4>
                <p className="font-poppins text-[16px] leading-[27px] mt-5">If you are interested in our marine cargo survey services, please don't hesitate to contact us. You can
                    reach us by phone, email, or through our website contact form. We look forward to working with you!</p>
            </div>

            <div className='flex flex-col md:mt-0 mt-5'>
                {contact.map((Contact, index) => (
                    <p className='mt-5'>{Contact.title}: {Contact.content}</p>
                ))}
            </div>
        </div>

        <div className='w-full flex sm:mt-5 mt-10 sm:mb-5 mb-10'>
            <a className='font-poppins font-nornal text-center text-[10px]'
                href="https://www.freepik.com/free-vector/sea-port-design-concept-set-with-container-cargo-shipment-flat-icons_2873554.htm#query=survey%20marine&position=47&from_view=search&track=ais">Credit: Image by macrovector on Freepik
            </a>
        </div>
    </section>

)


export default Footer