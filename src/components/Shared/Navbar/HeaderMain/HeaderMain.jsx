'use client'
import Image from "next/image";
import style from './Header.module.css'
import { useState } from "react";
import SearchSection from "./SearchSection/SearchSection";
import { IoMdArrowDropdown } from "react-icons/io";
import Link from "next/link";

export default function HeaderMain() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const items = ['Products', 'Category', 'Events'];
    const subCategoryItems = ['Shoe', 'Toys', 'Fish', 'Wooden Furniture', 'Plastic'];
    const accessItems = ['Buyer', 'Seller', 'Advisory', 'Events'];

    return (
        <div className={style.container}>
            <Link href='/'>
                <Image
                    src='/images/logo/Biztrade logo.png'
                    alt=""
                    height={32}
                    width={143}
                    className={style.logo}
                />
            </Link>

            <div className={style.flexRow}>
                <div>
                    <div className={style.flexRow}>
                        {items?.map((item, index) => (
                            <p
                                key={index}
                                className={`${style.menuItem} ${selectedIndex === index ? style.menuItemActive : style.menuItemHover
                                    }`}
                                onClick={() => setSelectedIndex(index)}
                            >
                                {item}
                            </p>
                        ))}
                    </div>

                    <SearchSection />

                    <div className={style.flexRow}>
                        {
                            subCategoryItems?.map((item, index) => (
                                <p key={index} className={style.subCategoryItems}>{item}</p>
                            ))
                        }

                    </div>
                </div>

                <div className={style.flexRow}>
                    {
                        accessItems?.map((item, index) => (
                            <div className={style.accessItemFlex} key={index}>
                                <p className={style.accessItems}>{item}</p>
                                <IoMdArrowDropdown />
                            </div>
                        ))
                    }
                </div>
            </div>


        </div>
    );
}
