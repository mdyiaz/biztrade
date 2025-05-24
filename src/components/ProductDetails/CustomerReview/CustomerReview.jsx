
import Rating from '@/components/Shared/Rating/Rating';
import style from './CustomerReview.module.css'
import { formatDate } from '@/utils/formateDate';

export default function CustomerReview({ reviews }) {

    return (
        <div className={style.container}>
            <h2 className={style.headerText}>Customer Reviews</h2>

            <div>
                {
                    reviews?.map((review, index) => (
                        <div key={index} className={style.reviewBox}>
                            <div className={style.nameAndDateFlexBox}>
                                <p>{review?.reviewerName}</p>
                                <p>{formatDate(review?.date)}</p>
                            </div>
                            <Rating rating={review?.rating} />
                            <p>{review?.comment}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
