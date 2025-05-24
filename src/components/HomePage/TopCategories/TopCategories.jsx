import Image from "next/image";
import style from './TopCategories.module.css'

export default function TopCategories() {

    const truncateText = (text, charLimit = 17) => {
        return text.length > charLimit ? text.slice(0, charLimit) + '...' : text;
    };

    const categoryItems = [
        { icon: '/images/categories/t-shirt.png', text: 'RMG & Accessories' },
        { icon: '/images/categories/leather derby shoe.png', text: 'Leather &  Leather' },
        { icon: '/images/categories/jute.png', text: 'Jute & Jute Product' },
        { icon: '/images/categories/agricultural.png', text: 'Agro & Agro Based' },
        { icon: '/images/categories/bedding.png', text: 'Home Textiles, Kitchen' },
        { icon: '/images/categories/knitting.png', text: 'Handicraft & Handler' },
        { icon: '/images/categories/fast food.png', text: 'Food & Beverages' },
        { icon: '/images/categories/furniture.png', text: 'Furniture and Furniture' },
        { icon: '/images/categories/brick.png', text: 'Building materials &' },
        { icon: '/images/categories/books.png', text: 'Books, Stationary &' },
        { icon: '/images/categories/electronics.png', text: 'Consumer Electroni' },
        { icon: '/images/categories/skin care.png', text: 'Fashion, Beauty & P' },
    ];

    return (
        <div className={style.container}>
            <h2 className={style.headerText}>Top Categories</h2>
            <div>
                {categoryItems.map((item, index) => (
                    <div className={style.flexBox} key={index}>
                        <Image
                            src={item.icon}
                            height={22}
                            width={22}
                            alt="category"
                        />
                        <p className={style.categoryText}>{truncateText(item.text)}</p>
                    </div>
                ))}
            </div>

            <p className={style.viewAllCat}>View All Categories</p>
        </div>
    );
}
