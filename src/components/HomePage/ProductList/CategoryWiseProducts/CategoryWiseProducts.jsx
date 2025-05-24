'use client';

import { useState } from 'react';
import style from './CategoryWiseProducts.module.css'
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ProductCard from '@/components/Shared/ProductCard/Productcard';

export default function CategoryWiseProducts({ groupedProducts }) {
    const categories = Object.entries(groupedProducts);

    const createSlider = () => {
        const [currentSlide, setCurrentSlide] = useState(0);
        const [loaded, setLoaded] = useState(false);

        const [sliderRef, instanceRef] = useKeenSlider({
            initial: 0,
            slides: {
                perView: 5,
                spacing: 15,
            },
            breakpoints: {
                "(max-width: 1200px)": {
                    slides: { perView: 4, spacing: 15 }
                },
                "(max-width: 992px)": {
                    slides: { perView: 3, spacing: 15 }
                },
                "(max-width: 768px)": {
                    slides: { perView: 2, spacing: 10 }
                },
                "(max-width: 480px)": {
                    slides: { perView: 1, spacing: 10 }
                }
            },
            slideChanged(slider) {
                setCurrentSlide(slider.track.details.rel);
            },
            created() {
                setLoaded(true);
            },
        });

        return { sliderRef, instanceRef, currentSlide, loaded };
    };

    return (
        <div>
            {categories.map(([category, items], categoryIndex) => {
                const { sliderRef, instanceRef, currentSlide, loaded } = createSlider();

                return (
                    <div key={category} className={style.categorySection}>
                        <h3 className={style.categoryTitle}>{capitalize(category)}</h3>
                        <div className={style.sliderWrapper}>
                            <div ref={sliderRef} className={`keen-slider ${style.sliderContainer}`}>
                                {items.map((product) => (
                                    <div key={product.id} className="keen-slider__slide">
                                        <ProductCard
                                            productId={product?.id}
                                            thumbnail={product.thumbnail}
                                            title={product.title}
                                            price={product.price}
                                            moq={product.minimumOrderQuantity}
                                            brand={product.brand}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            {loaded && instanceRef.current && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            instanceRef.current?.prev();
                                        }}
                                        className={`${style.arrow} ${style.arrowLeft} ${currentSlide === 0 ? style.arrowDisabled : ""
                                            }`}
                                        disabled={currentSlide === 0}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            instanceRef.current?.next();
                                        }}
                                        className={`${style.arrow} ${style.arrowRight} ${currentSlide === instanceRef.current.track.details.slides.length - 1 ? style.arrowDisabled : ""
                                            }`}
                                        disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}