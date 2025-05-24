import Benifits from "@/components/HomePage/Benifits/Benifits";
import BusinessAdvisory from "@/components/HomePage/BusinessAdvisory/BusinessAdvisory";
import BuyRequirement from "@/components/HomePage/BuyRequirement/BuyRequirement";
import FeaturedSeller from "@/components/HomePage/FeaturedSeller/FeaturedSeller";
import ProductList from "@/components/HomePage/ProductList/ProductList";
import Promotion from "@/components/HomePage/Promotion/Promotion";
import Rfq from "@/components/HomePage/Rfq/Rfq";
import TopCategories from "@/components/HomePage/TopCategories/TopCategories";
import { getData } from "@/utils/getData";

export default async function Home() {

  const res = await getData(`/products`);
  const products = res.products;


  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 20px' }}>
      <div style={{ backgroundColor: '#FAFAFA' }}>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <TopCategories />
          <Promotion />
        </div>
        <FeaturedSeller />
        <ProductList products={products} />
        <BusinessAdvisory />
        <Rfq />
        <BuyRequirement />
      </div>
      <Benifits />
    </div>
  );
}
