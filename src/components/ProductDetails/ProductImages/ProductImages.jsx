'use client';

import { useState } from 'react';
import Image from 'next/image';
import style from './ProductImages.module.css';

export default function ProductImages({ images, title }) {
    const [selectedImage, setSelectedImage] = useState(images?.[0] || '');

    return (
        <div>
            {selectedImage && (
                <div className={style.selectedImageDiv}>
                    <Image
                        src={selectedImage}
                        width={800}
                        height={800}
                        alt={title}
                    />
                </div>
            )}

            <div className={style.imagevariationFlex}>
                {
                    images?.map((image, index) => (
                        <div
                            key={index}
                            className={`${style.varientImageDiv} ${selectedImage === image ? style.selected : ''}`}
                            onClick={() => setSelectedImage(image)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Image
                                src={image}
                                width={500}
                                height={500}
                                alt={title}
                                className={style.varientimage}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
