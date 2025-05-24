
import style from './ProductInfo.module.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoShieldOutline } from "react-icons/io5";
import { LuRotateCcw } from "react-icons/lu";


export default function ProductInfo({ product }) {

    return (
        <div className={style.container}>
            <div>
                <h3 className={style.headerText}>Product Information</h3>
                <div className={style.productMetaGrid}>
                    <div>
                        <span className={style.labelText}>SKU:</span>
                        <span className={style.valueText}>{product?.sku}</span>
                    </div>
                    <div>
                        <span className={style.labelText}>Weight:</span>
                        <span className={style.valueText}>{product?.weight}g</span>
                    </div>
                    <div>
                        <span className={style.labelText}>Dimensions:</span>
                        <span className={style.valueText}>{product?.dimensions.width} × {product?.dimensions?.height} × {product?.dimensions?.depth}{" "}
                            cm</span>
                    </div>
                </div>

                <hr className={style.customHr} />

                <div className="infoSection">
                    <div className={style.infoFlex}>
                        <CiDeliveryTruck className={style.iconBlue} />
                        <p className={style.infoText}>{product.shippingInformation}</p>
                    </div>

                    <div className={style.infoFlex}>
                        <IoShieldOutline className={style.iconGreen} />
                        <p className={style.infoText}>{product.warrantyInformation}</p>
                    </div>

                    <div className={style.infoFlex}>
                        <LuRotateCcw className={style.iconRed} />
                        <p className={style.infoText}>{product.returnPolicy}</p>
                    </div>
                </div>


            </div>

        </div>
    );
}
