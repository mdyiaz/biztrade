import Image from 'next/image';
import style from './Footer.module.css'
export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.footerSection}>
                <div className={style.spanTwo}>
                    <p className={style.headerText}>Stay Connected</p>
                    <div className={style.footerImageFlex}>
                        <Image
                            src='/images/footer/facebook.png'
                            height={32}
                            width={32}
                            alt='facebook'
                            className={style.footerImage}
                        />
                        <Image
                            src='/images/footer/whatsapp.png'
                            height={32}
                            width={32}
                            alt='facebook'
                            className={style.footerImage}
                        />
                        <Image
                            src='/images/footer/instagram.png'
                            height={32}
                            width={32}
                            alt='facebook'
                            className={style.footerImage}
                        />
                    </div>

                </div>

                <div>
                    <p className={style.headerText}>About US</p>
                    <p className={style.secondaryText}>About Biztrade</p>
                    <p className={style.secondaryText}>Biztradebd.com Blog</p>
                    <p className={style.secondaryText}>Privacy Policy</p>
                    <p className={style.secondaryText}>Terms & Condition</p>
                    <p className={style.secondaryText}>Policies & Rules</p>
                    <p className={style.secondaryText}>Open a Case</p>
                </div>

                <div>
                    <p className={style.headerText}>Source on Biztrade</p>
                    <p className={style.secondaryText}>Product Categories</p>
                    <p className={style.secondaryText}>Request for Quatation</p>
                    <p className={style.secondaryText}>Buyer Guide</p>
                    <p className={style.secondaryText}>Global Business Derectory</p>
                    <p className={style.secondaryText}>Search Product or Suppliers</p>
                </div>

                <div>
                    <p className={style.headerText}>Sell on Biztrade</p>
                    <p className={style.secondaryText}>Create Seller Page</p>
                    <p className={style.secondaryText}>Premium Member Pricing</p>
                    <p className={style.secondaryText}>Display your Product</p>
                    <p className={style.secondaryText}>Seller Guide</p>
                    <p className={style.secondaryText}>Learning Center</p>
                </div>

                <div>
                    <p className={style.headerText}>Services</p>
                    <p className={style.secondaryText}>Buyer Matchmaking</p>
                    <p className={style.secondaryText}>Legal  & Licensing</p>
                    <p className={style.secondaryText}>Digital Marketing</p>
                    <p className={style.secondaryText}>Web Design and Develooment</p>
                    <p className={style.secondaryText}>Graphic Designing.</p>
                </div>

            </div>
            <hr className={style.hrTag} />
            <div className={style.bottomTextFlex}>
                <p className={style.bottomText}>One Stop Solution For All Business Needs </p>
                <p className={style.bottomText}>© 2023 Biztrade.com. All rights reserved.</p>
            </div>
        </div>
    );
}
