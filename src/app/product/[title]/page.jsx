import ProductDetails from "@/components/ProductDetails/ProductDetails";
import { getData } from "@/utils/getData";


export default async function ProductPage({ params }) {

    const productUrl = params?.title
    const id = productUrl.split('-').pop()

    const product = await getData(`/products/${id}`)

    return (
        <div>
            <ProductDetails product={product} />
        </div>
    );
}
