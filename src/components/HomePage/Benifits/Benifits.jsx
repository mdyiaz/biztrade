import Image from 'next/image';
import style from './Benifits.module.css'
export default function Benifits() {
    const benifits = [
        { icon: '/images/benifits/value.png', title: 'Great Value', short_description: 'We offer competitive prices on over 100 million items', },
        { icon: '/images/benifits/truck.png', title: 'Worldwide shopping', short_description: 'We ship to over 200 countries and regions, and our site comes in 12 languages', },
        { icon: '/images/benifits/card.png', title: 'Safe payment', short_description: 'Pay with the world’s most popular and secure payment methods.', },
        { icon: '/images/benifits/confidence.png', title: 'Shop with confidence', short_description: 'Our Buyer Protection policy covers your entire purchase journey', },
        { icon: '/images/benifits/help.png', title: 'Help center', short_description: 'Round-the-clock assistance for a smooth shopping experience.', },
    ]
    return (
        <div className={style.container}>
            <div className={style.featuresSection}>
                {
                    benifits?.map((benifit, index) => (
                        <div key={index} className={style.featureCard}>
                            <Image
                                src={benifit.icon}
                                height={48}
                                width={48}
                                alt={benifit.title}
                                className={style.cardImage}
                            />
                            <p className={style.cardTitle}>{benifit?.title}</p>
                            <p className={style.cardShortDescription}>{benifit?.short_description}</p>
                        </div>
                    ))
                }
                <div>

                </div>

            </div>

        </div>
    );
}
