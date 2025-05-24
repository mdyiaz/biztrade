import Image from 'next/image';
import style from './BusinessAdvisory.module.css'
export default function BusinessAdvisory() {

    const businessAdvisoreys = [
        { icon: '/images/businessAdvisory/icon-pink-1.png', name: 'B2B Matchmaking', shortDescription: 'We wont leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques', package: 'Web Design', type: 'Web Development', color: '#FFB5D1' },

        { icon: '/images/businessAdvisory/icon-forest-green-2.png', name: 'Licensing', shortDescription: 'We wont leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques', package: 'SEO Package', type: 'Digital Marketing', color: '#3159FB' },

        { icon: '/images/businessAdvisory/icon-blue-1.png', name: 'Digital Marketing', shortDescription: 'We wont leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques', package: 'SEO Package', type: 'Digital Marketing', color: '#3159FB' },

        { icon: '/images/businessAdvisory/icon-sky-blue-1.png', name: 'Web Design', shortDescription: 'We wont leave you hanging after your website is complete. We can take an in-depth look at your online marketing opportunities including SEO, Google Ads and inbound marketing techniques', package: 'Trade License', type: 'Export License', color: '#3159FB' },
    ]

    return (
        <div>
            <h2 className={style.headerText}>Business Advisory</h2>
            <div className={style.gridWrapper}>
                {businessAdvisoreys?.map((advise, index) => (
                    <div className={style.card} key={index}>
                        <Image
                            src={advise.icon}
                            height={102}
                            width={102}
                            alt={advise.name}
                            className={style.cardImage}
                        />
                        <p className={style.cardName}>{advise?.name}</p>
                        <p className={style.cardShortDescription}>{advise?.shortDescription}</p>
                        <div className={style.cardPackage}>
                            <p className={style.cardPackageText}>{advise?.package}</p>
                        </div>

                        <div className={style.cardType} style={{ backgroundColor: advise.color }}>
                            <p className={style.cardTypeText}>{advise?.type}</p>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    );
}
