import Image from "next/image";
import style from './Promotion.module.css'
import MoreServices from "./MoreServices/MoreServices";

export default function Promotion() {
    return (
        <div>
            <div className={style.gridContainer}>
                <div>
                    <Image
                    src='/images/promotion/promotionOne.jpg'
                    height={359}
                    width={589}
                    alt="promotion"
                    className={style.imageOne}
                />
                </div>

                <div>
                    <div className={style.backgroundImageContainer}>
                        <p>
                            Source products<br />
                            from trusted suppliers.
                        </p>
                        <button className={style.exploreButton}>
                            Explore <strong>Seller List</strong>
                        </button>
                    </div>

                    <div className={`${style.backgroundImageContainer} ${style.backgroundImageContainerSecond}`}>
                        <p>
                            Discover quality goods<br />
                            from verified exporters.
                        </p>
                        <button className={style.exploreButton}>
                            Post Buy <strong>Requirement</strong>
                        </button>
                    </div>
                </div>

            </div>

            <MoreServices />
        </div>
    );
}
