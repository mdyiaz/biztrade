'use client'
import Rating from '@/components/Shared/Rating/Rating';
import style from './ProductDescription.module.css'
import QuantityAndAddToCart from './QuantityAndAddToCart/QuantityAndAddToCart';
import { useState } from 'react';
import ProductInfo from './ProductInfo/ProductInfo';


export default function ProductDescription({ product }) {
    const [quantity, setQuantity] = useState(1)

    const discountedPrice = product.price * (1 - product.discountPercentage / 100)

    return (
        <div>
            <div className={style.tagFlex}>
                {
                    product?.tags?.map((tag, index) => (
                        <div key={index} className={style.tagDiv}>
                            <p className={style.tagText}>{tag}</p>
                        </div>
                    ))
                }
            </div>

            <h2 className={style.title}>{product?.title}</h2>
            <div>
                <p className={style.catAndBrandText}>Category: <span className={style.catAndBrandSpanText}>{product?.category}</span></p>
                <p className={style.catAndBrandText}>Brand: <span className={style.catAndBrandSpanText}>{product?.brand}</span></p>
            </div>
            <Rating
                rating={product?.rating || 0}
                reviewLength={product?.reviews?.length}
            />
            <p className={style.descriptionText}>{product?.description}</p>

            <div className={style.badgeFlex}>
                <p className={style.discountPrice}>${discountedPrice.toFixed(2)}</p>
                <p className={style.price}>${product.price.toFixed(2)}</p>
                <div className={style.badge} >
                    <p className={style.badgeText}>{product.discountPercentage.toFixed(0)}% OFF</p>
                </div>
            </div>


            {/* Stock Status */}
            <div className={style.stockDiv}>
                <div className={style.bgGreen}></div>
                <span className={style.stocktext}>
                    {product.availabilityStatus} ({product.stock} available)
                </span>
            </div>

            <QuantityAndAddToCart
                quantity={quantity}
                setQuantity={setQuantity}
                discountedPrice={discountedPrice}
            />

            <ProductInfo product={product} />

        </div>
    );
}
