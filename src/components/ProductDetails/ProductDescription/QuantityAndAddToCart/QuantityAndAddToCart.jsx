import style from './QuantityAndAddToCart.module.css'

export default function QuantityAndAddToCart({ quantity, setQuantity, discountedPrice }) {

    return (
        <div className={style.container}>
            <div>
                <div className={style.quantityDivFlex}>
                    <label className={style.quantityLabel}>Quantity:</label>
                    <div className={style.quantityFlexBox}>
                        <button
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className={style.quantityButton}
                        >
                            -
                        </button>
                        <span className={style.quantityText}>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)} className={style.quantityButton}>
                            +
                        </button>
                    </div>
                </div>

                <button className={style.cartButton}>
                    Add to Cart - ${(discountedPrice * quantity).toFixed(2)}
                </button>
            </div>
        </div>
    );
}
