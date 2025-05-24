
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import styles from './Rating.module.css';

export default function Rating({ rating = 0, size = 18, reviewLength }) {
    const getStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (rating >= i) {
                stars.push(<MdStar key={i} size={size} color="#F88216" />);
            } else if (rating >= i - 0.5) {
                stars.push(<MdStarHalf key={i} size={size} color="#F88216" />);
            } else {
                stars.push(<MdStarBorder key={i} size={size} color="#F88216" />);
            }
        }
        return stars;
    };

    return (
        <div className={styles.ratingContainer}>
            {getStars()}
            <span className={styles.ratingText}>{rating.toFixed(1)}</span>
           { reviewLength && <span className={styles.ratingText}>({reviewLength} Reviews)</span>}
        </div>
    );
}
