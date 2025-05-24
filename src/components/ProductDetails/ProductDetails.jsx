import CustomerReview from './CustomerReview/CustomerReview';
import ProductDescription from './ProductDescription/ProductDescription';
import style from './ProductDetails.module.css'
import ProductImages from './ProductImages/ProductImages';


export default function ProductDetails({ product }) {

    return (
        <div className={style.container}>
            <div className={style.gridContainer}>
                <div className={style.firstGridItem}>
                    <ProductImages
                        images={product?.images}
                        title={product?.title}
                    />
                </div>

                <div className={style.secondGridItem}>
                    <ProductDescription product={product} />
                </div>

            </div>
            <CustomerReview reviews={product?.reviews} />

        </div>
    );
}
