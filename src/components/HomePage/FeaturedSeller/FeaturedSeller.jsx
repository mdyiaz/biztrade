'use client'
import React from "react";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import style from './FeaturedSller.module.css'
import Image from "next/image";
import { MdStar } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";


export default function FeaturedSeller() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 5,
            spacing: 15,
        },
    });

    const features = [
        { icon: '/images/featured/adidas.png', name: 'Adidas', category: 'Leather & Leather Products', rating: 4, type: 'Verified' },
        { icon: '/images/featured/lacoste.jpg', name: 'La Chemise Lacoste', category: 'RMG & Accessories', rating: 5 },
        { icon: '/images/featured/king_shirt.jpg', name: 'King T-Shirt', category: 'RMG & Accessories', rating: 3 },
        { icon: '/images/featured/infobd.jpg', name: 'Info BD', category: 'ICT, Computer & Electronics', rating: 4, type: 'Verified' },
        { icon: '/images/featured/digital.png', name: 'Digital World', category: 'ICT, Computer & Electronics', rating: 2 },
        { icon: '/images/featured/lacoste.jpg', name: 'La Chemise Lacoste', category: 'RMG & Accessories', rating: 5 },
        { icon: '/images/featured/king_shirt.jpg', name: 'King T-Shirt', category: 'RMG & Accessories', rating: 3 },
        { icon: '/images/featured/infobd.jpg', name: 'Info BD', category: 'ICT, Computer & Electronics', rating: 4, type: 'Verified' },
    ];


    return (
        <div>
            <h2 className={style.headerText}>Featured Seller</h2>

            <div ref={sliderRef} className={`keen-slider ${style.sliderContainer}`}>
                {features.map((feature, index) => (
                    <div className={`keen-slider__slide ${style.card}`} key={index}>
                        {feature?.type && (
                            <div className={style.premiumLabel}>
                                <RiVerifiedBadgeFill size={14} />
                                {feature.type}
                            </div>
                        )}

                        <Image
                            src={feature.icon}
                            height={102}
                            width={102}
                            alt={feature.name}
                            className={style.cardImage}
                        />
                        <p className={style.cardName}>{feature.name}</p>
                        <p className={style.cardcategory}>{feature.category}</p>
                        <div className={style.rating}>
                            {[...Array(5)].map((_, i) => (
                                <MdStar
                                    key={i}
                                    size={16}
                                    color={i < feature.rating ? "#F88216" : "#F882164D"}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
