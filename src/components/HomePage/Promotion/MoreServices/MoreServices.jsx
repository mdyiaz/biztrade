import Image from 'next/image';
import style from './MoreServices.module.css'
import { IoArrowForward } from "react-icons/io5";

export default function MoreServices() {

    const services = [
        { icon: '/images/moreService/handshake.png', text: 'Buyer Matchmaking' },
        { icon: '/images/moreService/business.png', text: 'Become a Seller' },
        { icon: '/images/moreService/wallet.png', text: 'Legal Service' },
        { icon: '/images/moreService/server.png', text: 'Membership Plans' },

    ];

    return (
        <div>
            <h2 className={style.headerText}>More Services</h2>

            <div className={style.flexbox}>
                {
                    services?.map((service, index) => (
                        <div className={style.card} >
                            <div>
                                <p className={style.title}>{service?.text}</p>
                                <div className={style.learnMoreFlexbox}>
                                    <p className={style.learnMoreText}>Learn More</p>
                                   <div>
                                     <div className={style.arrowDiv}>
                                        <IoArrowForward size={14} className={style.arrow} />
                                    </div>
                                   </div>
                                </div>
                            </div>

                            <Image
                                src={service?.icon}
                                height={84}
                                width={69}
                                alt='service'
                                className={style.cardImage}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
