'use client'
import Image from 'next/image';
import style from './BuyRequirement.module.css'
import { useForm } from 'react-hook-form';

export default function BuyRequirement() {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log('Form data:', data);
    };

    return (
        <div className={style.gradientBackground} >
            <div className={style.gridContainer}>
                <div>
                    <Image
                        src='/images/buyRequirement/buyRequirement.png'
                        height={211}
                        width={289}
                        alt='icon'
                        className={style.image}
                    />
                </div>
                <div>
                    <p className={style.title}>Post Buy Requirement</p>
                    <p className={style.titleTwo}>Get the Best Deals and Exclusive Offers with Biztrade</p>

                    <div className={style.barflex}>
                        <div className={style.barOne}></div>
                        <div className={style.barTwo}></div>
                    </div>
                    <p className={style.textThree}>Tell us about your requirement*</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={style.inputDiv}>
                            <div className={style.inputWrapper}>
                                <Image
                                    src='/images/buyRequirement/searchIcon.png'
                                    height={20}
                                    width={20}
                                    alt='search icon'
                                    className={style.inputIcon}
                                />
                                <input
                                    type="text"
                                    placeholder="Enter the product you are looking for"
                                    {...register('searchProduct', { required: true })}
                                    className={style.inputBox}
                                />
                            </div>
                        </div>

                        <div className={style.submitButton}>
                            <button type="submit" className={style.submitText}>
                                Continue
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}
