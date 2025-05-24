import Image from 'next/image';
import style from './Rfq.module.css'
export default function Rfq() {
    return (
        <div className={style.container}>
            <h2 className={style.headerText}>What is RFQ</h2>

            <div className={style.gridContainer}>
                <div className={style.leftContent}>
                    <div className={style.rectengularFlexBox}>
                        <div className={style.rectengular}>
                            <Image
                                src='/images/rfq/Vector.png'
                                height={36}
                                width={30}
                                alt='icon'
                                className={style.rectengularImage}
                            />
                        </div>
                        <p className={style.rectengularText}>Request for Quotation is a free and easy solution for buyers who are seeking quality quotes. By sending out a simple request, you will receive multiple quotes from qualified suppliers</p>
                    </div>

                    <div className={style.rfqFlexBox}>
                        <div>
                            <p className={style.rfqNumber}>2,701,000+</p>
                            <p className={style.rfqText}>RFQs posted</p>
                        </div>

                        <div>
                            <p className={style.rfqNumber}>163,000+</p>
                            <p className={style.rfqText}>Active suppliers</p>
                        </div>

                        <div>
                            <p className={style.rfqNumber}>22h</p>
                            <p className={style.rfqText}>Average response time</p>
                        </div>

                        <div>
                            <p className={style.rfqNumber}>7602</p>
                            <p className={style.rfqText}>Industries covered</p>
                        </div>
                    </div>
                </div>

                <div className={style.buyerCard}>
                    <div className={style.buyerCardFlexBox}>
                        <Image
                            src='/images/buyer/buyer.png'
                            height={49}
                            width={49}
                            alt='icon'
                            className={style.buyerImage}
                        />

                        <div>
                            <p className={style.buyerCountry}>Buyer from the U.S</p>
                            <p className={style.buyerTitle}>Hardware  Computer and Phone
                                Accessories Business</p>
                        </div>
                    </div>
                    <p className={style.buyerShortDescription}>‘’With RFQ I connected with almost 100
                        factories in an instant. Vendor on
                        Biztrade reply quickly </p>
                </div>
            </div>
        </div>
    );
}
