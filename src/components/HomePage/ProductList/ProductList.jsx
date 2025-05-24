import ProductCard from "@/components/Shared/ProductCard/Productcard";
import style from './ProductList.module.css'
import { getData } from "@/utils/getData";
import CategoryWiseProducts from "./CategoryWiseProducts/CategoryWiseProducts";

export default async function ProductList({ products }) {

    // Group products by category
    const groupedProducts = products.reduce((acc, product) => {
        const category = product.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(product);
        return acc;
    }, {});

    return (
        <div>
            <CategoryWiseProducts groupedProducts={groupedProducts} />
        </div>
    );
}
