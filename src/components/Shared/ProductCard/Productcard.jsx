import Image from 'next/image';
import style from './ProductCard.module.css'
import Link from 'next/link';
import slugify from '@/utils/slugify';
export default function ProductCard({ productId, thumbnail, title, price, moq, brand }) {
    return (
        <div className={style.card}>
            <Link href={`/product/${slugify(title)}-${productId}`}>
                <div className={style.imageDiv}>
                    <Image
                        src={thumbnail || '/images/product/product.png'}
                        width={98}
                        height={121}
                        alt='product'
                        className={style.productImage}
                    />
                </div>
                <p className={style.productName}>{title || 'Hanging Lamp'}</p>
                <p className={style.productName}>Price {price || '20'}$</p>
                <p className={style.moq}>MOQ: {moq || '1400'}</p>
            </Link>

            <div className={style.cardFooterFlex}>
                <div className={style.brandFlex}>
                    <div className={style.vectorDiv}>
                        <Image
                            src='/images/product/vectorOne.png'
                            width={10}
                            height={10}
                            alt='product'
                            className={style.productVector}
                        />
                    </div>
                    <p className={style.brandName}>{brand || 'ABZ Association'}</p>
                </div>

                <div className={style.enquiryDiv}>
                    <p className={style.enquiryText}>Send Enquiry</p>
                    <Image
                        src='/images/product/vectorTwo.png'
                        width={10}
                        height={10}
                        alt='product'
                        className={style.productVector}
                    />
                </div>
            </div>

        </div>
    );
}
